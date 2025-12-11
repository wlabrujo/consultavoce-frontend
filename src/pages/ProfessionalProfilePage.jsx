
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, MapPin, DollarSign, Calendar, Clock, CheckCircle2, Award, User, Heart } from 'lucide-react'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'

export default function ProfessionalProfilePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [professional, setProfessional] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [availability, setAvailability] = useState([])
  const [availableDates, setAvailableDates] = useState([])
  const [availableTimes, setAvailableTimes] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [reviews, setReviews] = useState([])
  const [averageRating, setAverageRating] = useState(0)

  // Buscar profissional e disponibilidade da API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const API_URL = import.meta.env.VITE_API_URL || 'https://vitabrasil-backend-production.up.railway.app'
        
        // Buscar profissional
        const profResponse = await fetch(`${API_URL}/api/professionals/${id}`)
        if (!profResponse.ok) throw new Error('Profissional não encontrado')
        const profData = await profResponse.json()
        setProfessional(profData.professional)
        
        // Buscar disponibilidade
        const availResponse = await fetch(`${API_URL}/api/availability/${id}`)
        if (availResponse.ok) {
          const availData = await availResponse.json()
          setAvailability(availData.availability || [])
          
          // Gerar próximas datas disponíveis (próximos 30 dias)
          const dates = []
          const today = new Date()
          // Normalizar para meia-noite para evitar problemas de timezone
          today.setHours(0, 0, 0, 0)
          
          for (let i = 1; i <= 30; i++) {
            const date = new Date(today)
            date.setDate(today.getDate() + i)
            const dayOfWeek = date.getDay()
            
            // Verificar se tem disponibilidade neste dia da semana
            const hasAvailability = availData.availability.some(a => a.day_of_week === dayOfWeek)
            if (hasAvailability) {
              // Formatar manualmente para evitar problemas de timezone
              const day = String(date.getDate()).padStart(2, '0')
              const month = String(date.getMonth() + 1).padStart(2, '0')
              const year = date.getFullYear()
              dates.push(`${day}/${month}/${year}`)
            }
          }
          setAvailableDates(dates)
        }
        
        // Buscar avaliações
        const reviewsResponse = await fetch(`${API_URL}/api/reviews/professional/${id}`)
        if (reviewsResponse.ok) {
          const reviewsData = await reviewsResponse.json()
          setReviews(reviewsData.reviews || [])
          setAverageRating(reviewsData.average_rating || 0)
        }
        
        // Verificar se está nos favoritos (apenas se estiver logado)
        const token = localStorage.getItem('consultavoce_token')
        if (token) {
          const favoriteResponse = await fetch(`${API_URL}/api/reviews/favorites/${id}/check`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
          if (favoriteResponse.ok) {
            const favoriteData = await favoriteResponse.json()
            setIsFavorite(favoriteData.is_favorite)
          }
        }
      } catch (err) {
        console.error('Error fetching data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [id])
  
  // Atualizar horários disponíveis quando data for selecionada
  useEffect(() => {
    if (selectedDate && availability.length > 0) {
      const [day, month, year] = selectedDate.split('/')
      const date = new Date(year, month - 1, day)
      const dayOfWeek = date.getDay()
      const dayAvailability = availability.filter(a => a.day_of_week === dayOfWeek)

      if (dayAvailability.length > 0) {
        const allSlots = []
        const slotDuration = professional?.slot_duration || 30

        dayAvailability.forEach(avail => {
          const startTime = new Date(`${year}-${month}-${day}T${avail.start_time}`)
          const endTime = new Date(`${year}-${month}-${day}T${avail.end_time}`)
          let currentSlot = startTime

          while (currentSlot < endTime) {
            allSlots.push(currentSlot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
            currentSlot.setMinutes(currentSlot.getMinutes() + slotDuration)
          }
        })

        setAvailableTimes(allSlots)
      } else {
        setAvailableTimes([])
      }
    } else {
      setAvailableTimes([])
    }
  }, [selectedDate, availability, professional])

  const handleToggleFavorite = async () => {
    if (!user) {
      alert('Faça login para favoritar profissionais')
      navigate('/login')
      return
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://vitabrasil-backend-production.up.railway.app'
      const token = localStorage.getItem('consultavoce_token')
      
      if (isFavorite) {
        // Remover dos favoritos
        const response = await fetch(`${API_URL}/api/reviews/favorites/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        })
        
        if (response.ok) {
          setIsFavorite(false)
          alert('❤️ Removido dos favoritos')
        }
      } else {
        // Adicionar aos favoritos
        const response = await fetch(`${API_URL}/api/reviews/favorites/${id}`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        })
        
        if (response.ok) {
          setIsFavorite(true)
          alert('❤️ Adicionado aos favoritos!')
        }
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
      alert('Erro ao atualizar favoritos')
    }
  }

  const handleBooking = async () => {
    console.log('handleBooking called')
    console.log('States:', { selectedDate, selectedTime, selectedType, user })
    
    if (!user) {
      alert('Você precisa estar logado para agendar uma consulta!')
      navigate('/login')
      return
    }

    if (!selectedDate || !selectedTime || !selectedType) {
      alert('Por favor, selecione data, horário e tipo de atendimento')
      console.log('Missing required fields')
      return
    }
    
    console.log('All validations passed, proceeding with booking...')

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://vitabrasil-backend-production.up.railway.app'
      const token = localStorage.getItem('consultavoce_token')
      
      // Determinar preço baseado no tipo
      let price = 0
      if (selectedType === 'Online') price = professional.pricing?.online
      else if (selectedType === 'Presencial') price = professional.pricing?.in_person
      else if (selectedType === 'Domiciliar') price = professional.pricing?.home
      
      // Converter data de DD/MM/YYYY para YYYY-MM-DD
      const [day, month, year] = selectedDate.split('/')
      const formattedDate = `${year}-${month}-${day}`
      
      // Converter tipo para lowercase
      const typeMap = {
        'Online': 'online',
        'Presencial': 'in_person',
        'Domiciliar': 'home'
      }
      const formattedType = typeMap[selectedType] || selectedType.toLowerCase()
      
      const response = await fetch(`${API_URL}/api/appointments/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          professional_id: professional.id,
          date: formattedDate,
          time: selectedTime,
          type: formattedType,
          price: price
        })
      })
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Erro ao criar agendamento')
      }
      
      alert(`Consulta agendada com sucesso!\n\nProfissional: ${professional.name}\nData: ${selectedDate}\nHorário: ${selectedTime}\nTipo: ${selectedType}\nValor: R$ ${price.toFixed(2)}`)
      navigate('/appointments')
    } catch (error) {
      console.error('Error booking:', error)
      alert('Erro ao agendar consulta: ' + error.message)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-lg text-gray-600">Carregando...</div>
      </div>
    )
  }

  if (error || !professional) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Profissional não encontrado</h2>
              <p className="text-gray-600 mb-6">{error || 'O profissional que você procura não existe.'}</p>
              <Button onClick={() => navigate('/search')}>
                Voltar para Busca
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  {professional.photo_url ? (
                    <img 
                      src={professional.photo_url} 
                      alt={professional.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center">
                      <User className="h-16 w-16 text-white" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {professional.preferred_name || professional.name}
                      </h1>
                      {user && user.userType === 'patient' && (
                        <button
                          onClick={handleToggleFavorite}
                          className={`p-3 rounded-full transition-all ${
                            isFavorite 
                              ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                          }`}
                          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                        >
                          <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                        </button>
                      )}
                    </div>
                    <p className="text-xl text-gray-600 mb-3">{professional.profession}</p>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">
                          {averageRating > 0 ? averageRating.toFixed(1) : 'Novo'}
                        </span>
                        {reviews.length > 0 && (
                          <span className="text-gray-500">({reviews.length} avaliações)</span>
                        )}
                      </div>
                    </div>

                    {professional.regulatoryBody && professional.registrationNumber && (
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Award className="h-4 w-4" />
                        <span>{professional.regulatoryBody} {professional.registrationNumber}</span>
                      </div>
                    )}

                    {professional.address && professional.address.city && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{professional.address.city}{professional.address.state ? `, ${professional.address.state}` : ''}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t pt-6">
                  {professional.specialties && professional.specialties.length > 0 && (
                    <>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Especialidades</h2>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {professional.specialties.map((spec, i) => (
                          <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {professional.description && (
                    <>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Sobre</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {professional.description}
                      </p>
                    </>
                  )}

                  {reviews.length > 0 && (
                    <>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Avaliações</h2>
                      <div className="space-y-4">
                        {reviews.map(review => (
                          <div key={review.id} className="border-b pb-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold">{review.patient_name}</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">
                              {new Date(review.created_at).toLocaleDateString()}
                            </p>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Card */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Agende sua Consulta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Atendimento</label>
                  <select 
                    id="type" 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Selecione o tipo</option>
                    {professional.pricing?.online && <option value="Online">Online - R$ {professional.pricing.online.toFixed(2)}</option>}
                    {professional.pricing?.in_person && <option value="Presencial">Presencial - R$ {professional.pricing.in_person.toFixed(2)}</option>}
                    {professional.pricing?.home && <option value="Domiciliar">Domiciliar - R$ {professional.pricing.home.toFixed(2)}</option>}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Data</label>
                  <select 
                    id="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Selecione uma data</option>
                    {availableDates.map(date => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Horário</label>
                  {availableTimes.length > 0 ? (
                    <select 
                      id="time" 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Selecione um horário</option>
                      {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="text-sm text-gray-500 p-2 bg-gray-100 rounded-md">
                      {selectedDate ? 'Nenhum horário disponível para esta data' : 'Selecione uma data para ver os horários'}
                    </div>
                  )}
                </div>

                <Button 
                  onClick={handleBooking}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={!selectedDate || !selectedTime || !selectedType}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Confirmar Agendamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

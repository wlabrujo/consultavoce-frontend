import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, MapPin, DollarSign, Calendar, Clock, CheckCircle2, Award } from 'lucide-react'
import Header from '@/components/Header'
import { mockProfessionals } from '@/data/mockProfessionals'
import { useAuth } from '@/contexts/AuthContext'

export default function ProfessionalProfilePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [showBooking, setShowBooking] = useState(false)

  const professional = mockProfessionals.find(p => p.id === parseInt(id))

  if (!professional) {
    return <div>Profissional não encontrado</div>
  }

  const availableDates = [
    '15/10/2025',
    '16/10/2025',
    '17/10/2025',
    '18/10/2025',
    '19/10/2025'
  ]

  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]

  const handleBooking = () => {
    if (!user) {
      alert('Você precisa estar logado para agendar uma consulta!')
      navigate('/login')
      return
    }

    if (!selectedDate || !selectedTime || !selectedType) {
      alert('Por favor, selecione data, horário e tipo de atendimento')
      return
    }

    alert(`Consulta agendada com sucesso!\n\nProfissional: ${professional.name}\nData: ${selectedDate}\nHorário: ${selectedTime}\nTipo: ${selectedType}\nValor: R$ ${professional.price}`)
    navigate('/appointments')
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
                  <img 
                    src={professional.photo} 
                    alt={professional.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {professional.name}
                    </h1>
                    <p className="text-xl text-gray-600 mb-3">{professional.profession}</p>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{professional.rating}</span>
                        <span className="text-gray-500">({professional.reviewCount} avaliações)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Award className="h-4 w-4" />
                      <span>{professional.regulatoryBody} {professional.registrationNumber}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{professional.city}, {professional.state}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Especialidades</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {professional.specialties.map((spec, i) => (
                      <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3">Sobre</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {professional.description}
                  </p>

                  <h2 className="text-xl font-bold text-gray-900 mb-3">Tipos de Atendimento</h2>
                  <div className="flex gap-2">
                    {professional.availableTypes.map((type, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Avaliações dos Pacientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Maria Silva', rating: 5, comment: 'Excelente profissional! Muito atenciosa e competente.', date: '10/10/2025' },
                    { name: 'João Santos', rating: 5, comment: 'Recomendo! Tratamento eficaz e humanizado.', date: '08/10/2025' },
                    { name: 'Ana Costa', rating: 4, comment: 'Muito boa consulta, profissional dedicado.', date: '05/10/2025' }
                  ].map((review, i) => (
                    <div key={i} className="border-b pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Card */}
          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Agendar Consulta</span>
                  <div className="flex items-center text-green-600">
                    <DollarSign className="h-5 w-5" />
                    <span className="text-2xl font-bold">{professional.price}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Tipo de Atendimento
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Selecione</option>
                    {professional.availableTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Data
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Selecione uma data</option>
                    {availableDates.map(date => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>

                {selectedDate && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Horário
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 text-sm rounded border ${
                            selectedTime === time
                              ? 'bg-green-600 text-white border-green-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-green-600'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDate && selectedTime && selectedType && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Resumo</h3>
                    <div className="space-y-1 text-sm text-green-800">
                      <p><strong>Data:</strong> {selectedDate}</p>
                      <p><strong>Horário:</strong> {selectedTime}</p>
                      <p><strong>Tipo:</strong> {selectedType}</p>
                      <p><strong>Valor:</strong> R$ {professional.price}</p>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime || !selectedType}
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Confirmar Agendamento
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao confirmar, você concorda com os termos de agendamento
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


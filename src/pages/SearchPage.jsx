import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Star, DollarSign, Filter } from 'lucide-react'
import Header from '@/components/Header'
// import { mockProfessionals } from '@/data/mockProfessionals' // REMOVIDO - sem dados mockados
import { allSpecialties } from '@/data/professions'
import { brazilianStates } from '@/data/states'

export default function SearchPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [consultationType, setConsultationType] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // TODO: Buscar profissionais reais da API
  const mockProfessionals = [] // Array vazio - sem dados mockados
  
  const filteredProfessionals = mockProfessionals.filter(prof => {
    const matchesSearch = searchTerm === '' || 
      prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prof.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesSpecialty = selectedSpecialty === '' || 
      prof.specialties.includes(selectedSpecialty)
    
    const matchesState = selectedState === '' || prof.state === selectedState
    const matchesCity = selectedCity === '' || 
      prof.city.toLowerCase().includes(selectedCity.toLowerCase())
    
    const matchesRating = prof.rating >= minRating
    
    const matchesType = consultationType === '' || 
      prof.availableTypes.includes(consultationType)

    return matchesSearch && matchesSpecialty && matchesState && 
           matchesCity && matchesRating && matchesType
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Encontre o Profissional Ideal
          </h1>
          <p className="text-xl text-gray-600">
            {filteredProfessionals.length} profissionais disponíveis
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar por nome ou especialidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button 
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Especialidade
                  </label>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Todas</option>
                    {allSpecialties.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Estado
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Todos</option>
                    {brazilianStates.map(state => (
                      <option key={state.code} value={state.code}>{state.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Cidade
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite a cidade..."
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Avaliação Mínima
                  </label>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="0">Qualquer</option>
                    <option value="3">3+ estrelas</option>
                    <option value="4">4+ estrelas</option>
                    <option value="4.5">4.5+ estrelas</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Tipo de Atendimento
                  </label>
                  <select
                    value={consultationType}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Todos</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Domiciliar">Domiciliar</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedSpecialty('')
                      setSelectedState('')
                      setSelectedCity('')
                      setMinRating(0)
                      setConsultationType('')
                    }}
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map(prof => (
            <Card key={prof.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={prof.photo} 
                    alt={prof.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">{prof.name}</h3>
                    <p className="text-sm text-gray-600">{prof.profession}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{prof.rating}</span>
                      <span className="text-xs text-gray-500">({prof.reviewCount})</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-1">
                    {prof.specialties.map((spec, i) => (
                      <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {prof.city}, {prof.state}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    A partir de R$ {prof.price}
                  </div>

                  <div className="flex gap-1">
                    {prof.availableTypes.map((type, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {prof.description}
                </p>

                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  onClick={() => navigate(`/professional/${prof.id}`)}
                >
                  Ver Perfil e Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('')
                setSelectedSpecialty('')
                setSelectedState('')
                setSelectedCity('')
                setMinRating(0)
                setConsultationType('')
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, User, Video, X, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'

export default function AppointmentsPage() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('upcoming')

  // Wait for auth to load
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-lg text-gray-600">Carregando...</div>
      </div>
    )
  }

  if (!user) {
    navigate('/login')
    return null
  }

  const isPatient = user.user_type === 'patient'

  // Arrays vazios - sem dados mockados
  const upcomingAppointments = []
  const pastAppointments = []

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {isPatient ? 'Minhas Consultas' : 'Agenda de Atendimentos'}
          </h1>
          <p className="text-xl text-gray-600">
            Gerencie seus agendamentos
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={activeTab === 'upcoming' ? 'default' : 'outline'}
            onClick={() => setActiveTab('upcoming')}
            className={activeTab === 'upcoming' ? 'bg-gradient-to-r from-green-600 to-blue-600' : ''}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Próximas ({upcomingAppointments.length})
          </Button>
          <Button
            variant={activeTab === 'past' ? 'default' : 'outline'}
            onClick={() => setActiveTab('past')}
            className={activeTab === 'past' ? 'bg-gradient-to-r from-green-600 to-blue-600' : ''}
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Realizadas ({pastAppointments.length})
          </Button>
        </div>

        {/* Content */}
        {activeTab === 'upcoming' ? (
          <div className="space-y-4">
            {upcomingAppointments.length === 0 ? (
              <Card>
                <CardContent className="p-12">
                  <div className="text-center">
                    <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Nenhuma consulta agendada
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {isPatient 
                        ? 'Você ainda não tem consultas marcadas. Busque profissionais e agende agora!'
                        : 'Você ainda não tem atendimentos agendados. Seus pacientes poderão agendar pelo seu perfil.'}
                    </p>
                    {isPatient && (
                      <Button onClick={() => navigate('/search')}>
                        <User className="h-4 w-4 mr-2" />
                        Buscar Profissionais
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              upcomingAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">
                            {appointment.date.split('/')[0]}
                          </div>
                          <div className="text-sm text-gray-600">
                            {appointment.date.split('/')[1]}/{appointment.date.split('/')[2]}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {isPatient ? appointment.professional : appointment.patient}
                          </h3>
                          <p className="text-gray-600">{appointment.specialty}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {appointment.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {appointment.type}
                            </div>
                          </div>
                          {appointment.address && (
                            <p className="text-sm text-gray-500 mt-1">{appointment.address}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Detalhes
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                          <X className="h-4 w-4 mr-1" />
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {pastAppointments.length === 0 ? (
              <Card>
                <CardContent className="p-12">
                  <div className="text-center">
                    <CheckCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Nenhuma consulta realizada
                    </h3>
                    <p className="text-gray-600">
                      {isPatient 
                        ? 'Seu histórico de consultas aparecerá aqui após os atendimentos.'
                        : 'Seu histórico de atendimentos aparecerá aqui após as consultas.'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              pastAppointments.map((appointment) => (
                <Card key={appointment.id} className="opacity-75">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gray-400">
                            {appointment.date.split('/')[0]}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.date.split('/')[1]}/{appointment.date.split('/')[2]}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {isPatient ? appointment.professional : appointment.patient}
                          </h3>
                          <p className="text-gray-600">{appointment.specialty}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {appointment.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {appointment.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {appointment.status}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}


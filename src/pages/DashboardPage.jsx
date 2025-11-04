import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Users, DollarSign, Star, Clock, MapPin, Heart, Search, FileText } from 'lucide-react'
import Header from '@/components/Header'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Olá, {user.preferred_name || user.name}! 👋
          </h1>
          <p className="text-xl text-gray-600">
            {isPatient 
              ? 'Bem-vindo ao seu painel de saúde' 
              : 'Gerencie seus atendimentos e perfil profissional'}
          </p>
        </div>

        {/* Conteúdo específico por tipo de usuário */}
        {isPatient ? (
          // DASHBOARD DO PACIENTE
          <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Consultas Agendadas</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                      <p className="text-xs text-gray-500 mt-1">Nenhuma consulta agendada</p>
                    </div>
                    <Calendar className="h-12 w-12 text-green-600 opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Profissionais Favoritos</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                      <p className="text-xs text-gray-500 mt-1">Adicione seus favoritos</p>
                    </div>
                    <Heart className="h-12 w-12 text-red-600 opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Histórico</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                      <p className="text-xs text-gray-500 mt-1">Consultas realizadas</p>
                    </div>
                    <FileText className="h-12 w-12 text-blue-600 opacity-20" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ações Rápidas */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comece Agora</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start h-auto py-4" 
                    onClick={() => navigate('/search')}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <Search className="h-5 w-5 mt-1" />
                      <div className="text-left">
                        <div className="font-semibold">Buscar Profissionais</div>
                        <div className="text-xs opacity-90">Encontre médicos, psicólogos e mais</div>
                      </div>
                    </div>
                  </Button>
                  
                  <Button 
                    className="w-full justify-start h-auto py-4" 
                    variant="outline"
                    onClick={() => navigate('/appointments')}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <Calendar className="h-5 w-5 mt-1" />
                      <div className="text-left">
                        <div className="font-semibold">Minhas Consultas</div>
                        <div className="text-xs text-gray-600">Veja seu histórico e agendamentos</div>
                      </div>
                    </div>
                  </Button>

                  <Button 
                    className="w-full justify-start h-auto py-4" 
                    variant="outline"
                    onClick={() => navigate('/profile')}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <Users className="h-5 w-5 mt-1" />
                      <div className="text-left">
                        <div className="font-semibold">Meu Perfil</div>
                        <div className="text-xs text-gray-600">Edite suas informações</div>
                      </div>
                    </div>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximas Consultas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Você ainda não tem consultas agendadas</p>
                    <Button onClick={() => navigate('/search')}>
                      Buscar Profissionais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          // DASHBOARD DO PROFISSIONAL
          <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Consultas Hoje</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                      <p className="text-xs text-gray-500 mt-1">Nenhuma agendada</p>
                    </div>
                    <Calendar className="h-12 w-12 text-green-600 opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total de Pacientes</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                      <p className="text-xs text-gray-500 mt-1">Aguardando primeiro paciente</p>
                    </div>
                    <Users className="h-12 w-12 text-blue-600 opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Receita Mensal</p>
                      <p className="text-2xl font-bold text-gray-900">R$ 0</p>
                      <p className="text-xs text-gray-500 mt-1">Neste mês</p>
                    </div>
                    <DollarSign className="h-12 w-12 text-green-600 opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Avaliação</p>
                      <p className="text-3xl font-bold text-gray-900">-</p>
                      <p className="text-xs text-gray-500 mt-1">Sem avaliações ainda</p>
                    </div>
                    <Star className="h-12 w-12 text-yellow-500 opacity-20" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Informações do Perfil Profissional */}
            <Card>
              <CardHeader>
                <CardTitle>Seu Perfil Profissional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Profissão</p>
                      <p className="font-semibold text-gray-900">{user.profession || 'Não informado'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Especialidades</p>
                      <p className="font-semibold text-gray-900">
                        {user.specialties ? (Array.isArray(user.specialties) ? user.specialties.join(', ') : user.specialties) : 'Não informado'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Conselho/Registro</p>
                      <p className="font-semibold text-gray-900">
                        {user.regulatory_body && user.registration_number 
                          ? `${user.regulatory_body} ${user.registration_number}` 
                          : 'Não informado'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Localização</p>
                      <p className="font-semibold text-gray-900">
                        {user.city && user.state ? `${user.city}, ${user.state}` : 'Não informado'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-2">Tipos de Atendimento</p>
                    <div className="flex flex-wrap gap-2">
                      {user.online_service && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          Online {user.online_price ? `- R$ ${user.online_price}` : ''}
                        </span>
                      )}
                      {user.in_person_service && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          Presencial {user.in_person_price ? `- R$ ${user.in_person_price}` : ''}
                        </span>
                      )}
                      {user.home_service && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          Domiciliar {user.home_price ? `- R$ ${user.home_price}` : ''}
                        </span>
                      )}
                      {!user.online_service && !user.in_person_service && !user.home_service && (
                        <span className="text-gray-500 text-sm">Nenhum tipo de atendimento configurado</span>
                      )}
                    </div>
                  </div>

                  <Button className="w-full mt-4" onClick={() => navigate('/profile')}>
                    Editar Perfil Profissional
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Agenda de Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Nenhuma consulta agendada para hoje</p>
                    <p className="text-sm text-gray-500">Seus pacientes poderão agendar consultas pelo seu perfil</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    onClick={() => navigate('/profile')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => navigate('/appointments')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Ver Agenda Completa
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => navigate('/my-patients')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Meus Pacientes
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => navigate('/financial')}
                  >
                    <DollarSign className="h-4 w-4 mr-2" />
                    Financeiro
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


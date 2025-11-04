import { Link } from 'react-router-dom'
import { Heart, Search, Calendar, Shield, Star, Users, ArrowRight, CheckCircle2, Clock, Lock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">VitaBrasil</span>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" size="lg" className="text-base font-semibold border-2 border-gray-300 hover:border-green-600 hover:text-green-600">
                  Entrar
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" className="text-base font-semibold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg">
                  Cadastre-se Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-20 w-20 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Conectando Saúde e <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Bem-Estar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              O marketplace que une pacientes e profissionais de saúde de forma simples, segura e eficiente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/search">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Buscar Profissionais
                  <Search className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o VitaBrasil?
            </h2>
            <p className="text-xl text-gray-600">
              A plataforma completa para cuidar da sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-500 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Busca Inteligente
                </h3>
                <p className="text-gray-600">
                  Encontre o profissional ideal com filtros por especialidade, localização e avaliação
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Agendamento Fácil
                </h3>
                <p className="text-gray-600">
                  Agende consultas presenciais ou domiciliares em poucos cliques
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Segurança Total
                </h3>
                <p className="text-gray-600">
                  Profissionais verificados e pagamentos protegidos pela plataforma
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diferenciais VitaBrasil
            </h2>
            <p className="text-xl opacity-90">
              A plataforma que transforma o cuidado com a saúde
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Profissionais Verificados</h3>
              <p className="text-lg opacity-90">
                Todos os profissionais passam por validação de registro e documentação
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Pagamento Seguro</h3>
              <p className="text-lg opacity-90">
                Transações protegidas com retenção até confirmação da consulta
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Disponível 24/7</h3>
              <p className="text-lg opacity-90">
                Agende consultas a qualquer hora, de qualquer lugar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Simples e rápido em 4 passos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Cadastre-se', desc: 'Crie sua conta gratuitamente' },
              { step: 2, title: 'Busque', desc: 'Encontre o profissional ideal' },
              { step: 3, title: 'Agende', desc: 'Escolha data e horário' },
              { step: 4, title: 'Consulte', desc: 'Realize sua consulta' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Para Pacientes
              </h2>
              <ul className="space-y-4">
                {[
                  'Acesso a centenas de profissionais qualificados',
                  'Agendamento online 24/7',
                  'Avaliações e comentários verificados',
                  'Atendimento presencial ou domiciliar',
                  'Pagamento seguro pela plataforma',
                  'Histórico completo de consultas'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Para Profissionais
              </h2>
              <ul className="space-y-4">
                {[
                  'Amplie sua base de pacientes',
                  'Gestão completa de agenda',
                  'Recebimento automático e seguro',
                  'Perfil profissional personalizado',
                  'Controle financeiro integrado',
                  'Suporte dedicado'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de pessoas que já cuidam da saúde com o VitaBrasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Criar Conta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-xl font-bold">VitaBrasil</span>
              </div>
              <p className="text-gray-400">
                Conectando saúde e bem-estar em todo o Brasil
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Plataforma</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/search" className="hover:text-white">Buscar Profissionais</Link></li>
                <li><Link to="/register" className="hover:text-white">Cadastrar</Link></li>
                <li><Link to="/login" className="hover:text-white">Entrar</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VitaBrasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


import { Link } from 'react-router-dom'
import { ArrowLeft, Heart } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Consulta Você</span>
            </Link>
            
            <Link 
              to="/register" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Cadastro
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos e Condições de Uso</h1>
          <p className="text-sm text-gray-600 mb-8">Última atualização: 28 de outubro de 2025</p>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Bem-vindo à Consulta Você! Somos uma plataforma online que conecta pacientes a profissionais de saúde qualificados, 
              facilitando o agendamento de consultas e o acesso a serviços de saúde e bem-estar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Estes Termos e Condições de Uso ("Termos") regem o seu acesso e uso da plataforma Consulta Você, incluindo nosso site, 
              aplicativos móveis e todos os serviços relacionados (coletivamente, a "Plataforma"). Ao se cadastrar ou utilizar nossa 
              Plataforma, você concorda em cumprir e estar legalmente vinculado a estes Termos.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar ou usar a Plataforma, você confirma que leu, entendeu e concorda em ficar vinculado por estes Termos. 
                Se você não concorda com estes Termos, não deve acessar ou usar a Plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. A Plataforma Consulta Você</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Consulta Você é um marketplace que atua como intermediário, permitindo que usuários ("Pacientes") encontrem, agendem 
                e paguem por consultas com diversos profissionais de saúde independentes ("Profissionais").
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">Nossa responsabilidade se limita a:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Conectar</strong> Pacientes e Profissionais</li>
                  <li><strong>Facilitar</strong> o agendamento e o pagamento das consultas através de um sistema seguro</li>
                  <li><strong>Verificar</strong> as credenciais profissionais (número de registro no conselho de classe) dos Profissionais no momento do cadastro</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <p className="text-gray-700">
                  <strong>A Consulta Você NÃO é um provedor de serviços de saúde.</strong> Não empregamos os Profissionais e não nos 
                  responsabilizamos pela qualidade, precisão ou legalidade dos serviços prestados por eles. A relação entre Paciente 
                  e Profissional é direta e independente da Consulta Você.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cadastro e Conta de Usuário</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para utilizar plenamente a Plataforma, você precisa criar uma conta. Você concorda em fornecer informações precisas, 
                atuais e completas durante o processo de registro e em manter essas informações atualizadas.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Tipos de Conta:</strong> Você pode se registrar como "Paciente" ou "Profissional". É permitido que um mesmo 
                CPF seja utilizado para uma conta de Paciente e uma conta de Profissional, desde que emails distintos sejam usados.</li>
                <li><strong>Segurança da Conta:</strong> Você é responsável por proteger sua senha e por todas as atividades que ocorram 
                em sua conta. Notifique-nos imediatamente sobre qualquer uso não autorizado.</li>
                <li><strong>Idade Mínima:</strong> Você deve ter pelo menos 18 anos para criar uma conta e usar a Plataforma.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Responsabilidades dos Usuários</h2>
              <p className="text-gray-700 leading-relaxed mb-4"><strong>Todos os usuários concordam em:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Utilizar a Plataforma de forma ética e em conformidade com a lei</li>
                <li>Não compartilhar informações falsas, enganosas ou fraudulentas</li>
                <li>Respeitar a privacidade e os dados dos outros usuários</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Responsabilidades dos Pacientes:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Fornecer informações de saúde precisas ao Profissional, quando solicitado</li>
                <li>Comparecer às consultas agendadas ou cancelá-las com a antecedência definida pelo Profissional</li>
                <li>Realizar o pagamento das consultas através da Plataforma</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-2"><strong>Responsabilidades dos Profissionais:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Manter suas credenciais e licenças profissionais válidas e atualizadas</li>
                <li>Prestar serviços com o mais alto padrão de ética e qualidade profissional</li>
                <li>Definir seus preços, horários e políticas de cancelamento de forma clara</li>
                <li>Manter a confidencialidade das informações dos Pacientes, em conformidade com a legislação aplicável (incluindo a LGPD)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Agendamento, Pagamentos e Taxas</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li><strong>Agendamento:</strong> Os agendamentos são feitos diretamente na Plataforma, com base na disponibilidade do Profissional.</li>
                <li><strong>Pagamento:</strong> Os pagamentos são processados de forma segura através de nossos parceiros de pagamento. 
                O valor da consulta é retido pela Consulta Você e liberado ao Profissional após a confirmação da realização do serviço.</li>
                <li><strong>Taxa de Serviço:</strong> A Consulta Você cobra uma taxa de serviço de 10% sobre o valor de cada consulta realizada 
                através da Plataforma. Esta taxa é deduzida automaticamente do valor a ser repassado ao Profissional.</li>
                <li><strong>Cancelamentos e Reembolsos:</strong> A política de cancelamento e reembolso é definida por cada Profissional. 
                A Consulta Você seguirá a política estabelecida pelo Profissional para processar eventuais reembolsos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todo o conteúdo da Plataforma, incluindo o design, software, textos, gráficos e logotipos, é de propriedade exclusiva 
                da Consulta Você ou de seus licenciadores e é protegido por leis de direitos autorais e propriedade intelectual. Você não 
                tem permissão para copiar, modificar ou distribuir nosso conteúdo sem autorização prévia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Consulta Você não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais 
                resultantes do uso ou da incapacidade de usar a Plataforma, incluindo, mas não se limitando a, erros, omissões, 
                interrupções, ou qualquer falha de desempenho.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Não nos responsabilizamos pela conduta de qualquer usuário, seja Paciente ou Profissional. Qualquer disputa relacionada 
                aos serviços de saúde prestados deve ser resolvida diretamente entre o Paciente e o Profissional.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Privacidade e Proteção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Nossa <Link to="/politica-de-privacidade" className="text-green-600 hover:underline font-semibold">Política de Privacidade</Link>, 
                que é parte integrante destes Termos, descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar a 
                Consulta Você, você concorda com as práticas descritas em nossa Política de Privacidade.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Modificações nos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos revisar e atualizar estes Termos a qualquer momento. Notificaremos você sobre quaisquer alterações significativas, 
                e o uso contínuo da Plataforma após a data de atualização constituirá sua aceitação dos novos Termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Disposições Gerais</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Legislação Aplicável:</strong> Estes Termos serão regidos e interpretados de acordo com as leis da República 
                Federativa do Brasil.</li>
                <li><strong>Foro:</strong> Fica eleito o foro da Comarca onde está sediada a Consulta Você, Brasil, para dirimir quaisquer 
                controvérsias oriundas destes Termos.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-gray-700 text-center">
                Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através de nossa Central de Ajuda ou pelo email{' '}
                <a href="mailto:contato@consultavoce.com.br" className="text-green-600 hover:underline font-semibold">
                  contato@consultavoce.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


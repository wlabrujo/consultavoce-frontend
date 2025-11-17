import { Link } from 'react-router-dom'
import { ArrowLeft, Heart, Shield, Lock, Eye, UserCheck, FileText, Clock } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
          <div className="flex items-center mb-4">
            <Shield className="h-10 w-10 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Política de Privacidade</h1>
          </div>
          <p className="text-sm text-gray-600 mb-8">Última atualização: 28 de outubro de 2025</p>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8">
            <p className="text-gray-700 leading-relaxed">
              <strong>A sua privacidade é uma prioridade para a Consulta Você.</strong> Esta Política de Privacidade explica como coletamos, 
              usamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossa plataforma. Esta política está em 
              conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>, Lei nº 13.709/2018.
            </p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">1. Informações que Coletamos</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Coletamos informações para fornecer e aprimorar nossos serviços. Os tipos de informações que coletamos dependem de 
                como você usa a Plataforma (seja como "Paciente" ou "Profissional").
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">a) Informações que Você nos Fornece:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Dados de Cadastro:</strong> Nome completo, e-mail, senha, CPF, data de nascimento, telefone, endereço e, 
                  no caso de Profissionais, número de registro profissional e especialidade.</li>
                  <li><strong>Dados de Perfil:</strong> Informações adicionais que você pode adicionar ao seu perfil, como nome social, 
                  descrição profissional e dados bancários (para Profissionais).</li>
                  <li><strong>Comunicações:</strong> Informações que você nos fornece ao entrar em contato com nosso suporte.</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">b) Informações Coletadas Automaticamente:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Dados de Uso:</strong> Informações sobre sua interação com a Plataforma, como páginas visitadas, buscas realizadas, 
                  agendamentos e outras ações.</li>
                  <li><strong>Dados de Log e Dispositivo:</strong> Endereço IP, tipo de navegador, sistema operacional, informações do dispositivo 
                  e datas e horários de acesso.</li>
                  <li><strong>Cookies:</strong> Usamos cookies para personalizar sua experiência, lembrar suas preferências e para fins de segurança.</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">c) Informações de Terceiros:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Provedores de Pagamento:</strong> Recebemos informações relacionadas às transações de pagamento, mas não armazenamos 
                  os dados completos do seu cartão de crédito.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">2. Como Usamos Suas Informações</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">Utilizamos suas informações para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Operar e Manter a Plataforma:</strong> Para criar e gerenciar sua conta, conectar Pacientes e Profissionais, 
                e facilitar o agendamento e pagamento de consultas.</li>
                <li><strong>Personalizar sua Experiência:</strong> Para exibir conteúdo relevante, como perfis de profissionais e recomendações.</li>
                <li><strong>Comunicação:</strong> Para enviar confirmações de agendamento, lembretes, atualizações da plataforma, e responder 
                às suas solicitações de suporte.</li>
                <li><strong>Segurança e Verificação:</strong> Para verificar sua identidade, proteger contra fraudes, e garantir a segurança 
                da nossa Plataforma.</li>
                <li><strong>Melhoria dos Serviços:</strong> Para analisar o uso da Plataforma, realizar pesquisas e desenvolver novas funcionalidades.</li>
                <li><strong>Cumprimento Legal:</strong> Para cumprir nossas obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">3. Compartilhamento de Informações</h2>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4">
                <p className="text-gray-700 font-semibold">
                  <strong>Não vendemos suas informações pessoais.</strong>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">Compartilhamos suas informações apenas nas seguintes circunstâncias:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Entre Pacientes e Profissionais:</strong> Compartilhamos as informações necessárias para viabilizar a consulta.</li>
                <li><strong>Com Provedores de Serviço:</strong> Compartilhamos informações com terceiros que nos auxiliam a operar a Plataforma, 
                como provedores de pagamento, serviços de hospedagem em nuvem e ferramentas de análise.</li>
                <li><strong>Por Razões Legais:</strong> Podemos divulgar suas informações se acreditarmos que é necessário para cumprir uma lei, 
                ordem judicial, ou para proteger os direitos, a propriedade ou a segurança da Consulta Você.</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">4. Seus Direitos de Proteção de Dados (LGPD)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">✓ Confirmação e Acesso</h3>
                  <p className="text-sm text-gray-700">O direito de confirmar a existência de tratamento e de acessar suas informações pessoais.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">✓ Correção</h3>
                  <p className="text-sm text-gray-700">O direito de solicitar a correção de dados incompletos, inexatos ou desatualizados.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">✓ Eliminação</h3>
                  <p className="text-sm text-gray-700">O direito de solicitar a eliminação dos seus dados pessoais tratados com o seu consentimento.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">✓ Portabilidade</h3>
                  <p className="text-sm text-gray-700">O direito de solicitar a portabilidade dos seus dados para outro fornecedor de serviço.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">✓ Informação sobre Compartilhamento</h3>
                  <p className="text-sm text-gray-700">O direito de ser informado sobre as entidades com as quais compartilhamos seus dados.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">✓ Revogação do Consentimento</h3>
                  <p className="text-sm text-gray-700">O direito de revogar seu consentimento a qualquer momento.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para exercer seus direitos, entre em contato conosco através do email{' '}
                <a href="mailto:privacidade@consultavoce.com.br" className="text-green-600 hover:underline font-semibold">
                  privacidade@consultavoce.com.br
                </a>
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">5. Segurança de Dados</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, 
                alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Criptografia de dados sensíveis (SSL/TLS)</li>
                <li>Firewalls e sistemas de detecção de intrusão</li>
                <li>Controle de acesso restrito aos dados</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 text-sm italic">
                No entanto, nenhum sistema é 100% seguro. Embora tomemos todas as medidas razoáveis para proteger seus dados, 
                não podemos garantir segurança absoluta.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">6. Retenção de Dados</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Reteremos suas informações pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, 
                incluindo para fins de cumprimento de obrigações legais, contábeis ou de relatórios. Após esse período, os dados serão 
                anonimizados ou excluídos de forma segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Alterações a esta Política de Privacidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando 
                a nova política na Plataforma e atualizando a data da "Última atualização".
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-gray-800 mb-3 text-center">Contato</h3>
              <p className="text-gray-700 text-center mb-4">
                Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre nossas práticas de proteção de dados:
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-center"><strong>Consulta Você Marketplace de Saúde</strong></p>
                <p className="text-gray-700 text-center">
                  Email:{' '}
                  <a href="mailto:privacidade@consultavoce.com.br" className="text-green-600 hover:underline font-semibold">
                    privacidade@consultavoce.com.br
                  </a>
                </p>
                <p className="text-gray-700 text-center">
                  Encarregado de Dados (DPO):{' '}
                  <a href="mailto:dpo@consultavoce.com.br" className="text-green-600 hover:underline font-semibold">
                    dpo@consultavoce.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


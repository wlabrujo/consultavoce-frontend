import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Termos de Uso</h1>
          <p className="text-sm text-gray-600 mb-8">Última atualização: 14 de outubro de 2025</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ao acessar e usar a plataforma Consulta Você, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Consulta Você é uma plataforma digital que conecta pacientes a profissionais de saúde qualificados, 
                facilitando o agendamento de consultas online, presenciais e domiciliares. Não somos um serviço de 
                emergência médica.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cadastro e Conta</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para usar nossos serviços, você deve:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Ter pelo menos 18 anos de idade</li>
                <li>Fornecer informações verdadeiras, precisas e completas</li>
                <li>Manter suas credenciais de acesso seguras e confidenciais</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                <li>Ser responsável por todas as atividades em sua conta</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Responsabilidades dos Pacientes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como paciente, você se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fornecer informações médicas precisas e completas</li>
                <li>Comparecer às consultas agendadas ou cancelar com antecedência</li>
                <li>Respeitar os profissionais de saúde</li>
                <li>Efetuar o pagamento pelos serviços contratados</li>
                <li>Não usar a plataforma para emergências médicas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Responsabilidades dos Profissionais</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como profissional de saúde, você se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Possuir registro profissional válido e ativo</li>
                <li>Fornecer informações verdadeiras sobre qualificações e especialidades</li>
                <li>Manter sigilo médico e confidencialidade</li>
                <li>Cumprir com os horários de consultas agendadas</li>
                <li>Seguir as normas éticas de sua profissão</li>
                <li>Manter seguro profissional ativo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Agendamentos e Cancelamentos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Política de Cancelamento:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cancelamentos com mais de 24 horas de antecedência: reembolso integral</li>
                <li>Cancelamentos com menos de 24 horas: taxa de 50%</li>
                <li>Não comparecimento (no-show): sem reembolso</li>
                <li>Profissionais que cancelarem: paciente recebe reembolso integral</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Pagamentos e Taxas</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Consulta Você cobra uma taxa de serviço sobre cada transação realizada na plataforma. 
                Os valores são definidos pelos profissionais e claramente informados antes da confirmação do agendamento.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Todos os pagamentos são processados por gateways seguros de terceiros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo o conteúdo da plataforma Consulta Você, incluindo textos, gráficos, logos, ícones, imagens e software, 
                é propriedade da Consulta Você ou de seus licenciadores e está protegido por leis de direitos autorais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Conduta Proibida</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                É proibido:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Usar a plataforma para atividades ilegais</li>
                <li>Fornecer informações falsas ou enganosas</li>
                <li>Violar direitos de terceiros</li>
                <li>Transmitir vírus ou códigos maliciosos</li>
                <li>Fazer engenharia reversa da plataforma</li>
                <li>Coletar dados de outros usuários sem autorização</li>
                <li>Criar contas falsas ou múltiplas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Consulta Você atua apenas como intermediária entre pacientes e profissionais de saúde. 
                Não somos responsáveis por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Qualidade dos serviços prestados pelos profissionais</li>
                <li>Diagnósticos, tratamentos ou resultados médicos</li>
                <li>Danos diretos ou indiretos decorrentes do uso da plataforma</li>
                <li>Interrupções ou falhas técnicas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Suspensão e Encerramento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reservamo-nos o direito de suspender ou encerrar sua conta a qualquer momento, sem aviso prévio, 
                se você violar estes Termos de Uso ou por qualquer outro motivo que considerarmos apropriado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Modificações dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas 
                por email ou através de aviso na plataforma. O uso continuado após as alterações constitui aceitação 
                dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Lei Aplicável</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa será resolvida no foro da comarca de São Paulo/SP.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para dúvidas sobre estes Termos de Uso:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Consulta Você Marketplace de Saúde</strong></p>
                <p className="text-gray-700">Email: <a href="mailto:contato@consultavoce.com.br" className="text-green-600 hover:underline">contato@consultavoce.com.br</a></p>
                <p className="text-gray-700">Suporte: <a href="mailto:suporte@consultavoce.com.br" className="text-green-600 hover:underline">suporte@consultavoce.com.br</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}


import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, Send, Bot, User } from 'lucide-react'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'

export default function SupportPage() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Olá${user ? `, ${user.name}` : ''}! 👋 Sou o assistente virtual do Consulta Você. Como posso ajudá-lo hoje?`,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const botResponses = {
    'agendar': 'Para agendar uma consulta, acesse a página de Busca de Profissionais, selecione o profissional desejado e clique em "Agendar Consulta". Você poderá escolher data, horário e tipo de atendimento.',
    'cancelar': 'Para cancelar uma consulta, vá até "Minhas Consultas", encontre o agendamento e clique em "Cancelar". Lembre-se que cancelamentos com menos de 24h de antecedência podem ter taxas.',
    'pagamento': 'Aceitamos pagamento via PIX, cartão de crédito e débito. O pagamento é processado de forma segura através da plataforma após a confirmação da consulta.',
    'profissional': 'Todos os profissionais cadastrados são verificados. Você pode ver as avaliações de outros pacientes, especialidades, formação e registro profissional no perfil de cada um.',
    'conta': 'Para editar sua conta, acesse o Dashboard e clique em "Meu Perfil". Lá você pode atualizar seus dados pessoais e informações de contato.',
    'domiciliar': 'Consultas domiciliares estão disponíveis para profissionais que oferecem este serviço. O valor pode variar dependendo da distância. Verifique no perfil do profissional.',
    'avaliacao': 'Após a consulta, você receberá um convite para avaliar o profissional. Sua avaliação ajuda outros pacientes a escolherem o melhor atendimento.',
    'default': 'Entendo sua dúvida! Para questões mais específicas, você pode:\n\n• Consultar nossa Central de Ajuda\n• Enviar email para suporte@consultavoce.com\n• Ligar para (11) 3000-0000\n\nEstou aqui para ajudar com dúvidas sobre agendamento, pagamento, profissionais e uso da plataforma.'
  }

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('agendar') || message.includes('marcar') || message.includes('consulta')) {
      return botResponses.agendar
    } else if (message.includes('cancelar') || message.includes('desmarcar')) {
      return botResponses.cancelar
    } else if (message.includes('pagar') || message.includes('pagamento') || message.includes('preço') || message.includes('valor')) {
      return botResponses.pagamento
    } else if (message.includes('profissional') || message.includes('médico') || message.includes('doutor')) {
      return botResponses.profissional
    } else if (message.includes('conta') || message.includes('perfil') || message.includes('dados')) {
      return botResponses.conta
    } else if (message.includes('domiciliar') || message.includes('casa') || message.includes('residência')) {
      return botResponses.domiciliar
    } else if (message.includes('avaliar') || message.includes('avaliação') || message.includes('nota')) {
      return botResponses.avaliacao
    } else {
      return botResponses.default
    }
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simular digitação do bot
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: getBotResponse(inputMessage),
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const quickQuestions = [
    'Como agendar uma consulta?',
    'Quais formas de pagamento?',
    'Como cancelar agendamento?',
    'Consulta domiciliar disponível?'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Central de Suporte
          </h1>
          <p className="text-xl text-gray-600">
            Estamos aqui para ajudar você
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Chat */}
          <Card className="md:col-span-2">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat com Assistente Virtual
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'bot' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {message.sender === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div className={`flex-1 ${message.sender === 'user' ? 'flex justify-end' : ''}`}>
                      <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'bot'
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                      }`}>
                        <p className="whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'bot' ? 'text-gray-500' : 'text-white/70'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 px-4"
                    onClick={() => setInputMessage(question)}
                  >
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Outros Canais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">suporte@consultavoce.com</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefone</p>
                  <p className="text-gray-600">(11) 3000-0000</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Horário</p>
                  <p className="text-gray-600">Seg-Sex: 8h às 18h</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


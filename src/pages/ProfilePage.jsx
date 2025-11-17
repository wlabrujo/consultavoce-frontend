import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Mail, Phone, FileText, Save, Award, DollarSign } from 'lucide-react'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import { professions, specialtiesByProfession, regulatoryBodiesByProfession } from '@/data/professions'

export default function ProfilePage() {
  const { user, updateUser, loading } = useAuth()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    preferred_name: user?.preferred_name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    cpf: user?.cpf || '',
    cep: user?.address?.cep || '',
    street: user?.address?.street || '',
    number: user?.address?.number || '',
    complement: user?.address?.complement || '',
    neighborhood: user?.address?.neighborhood || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    profession: user?.profession || '',
    specialties: Array.isArray(user?.specialties) ? user.specialties : (user?.specialties ? user.specialties.split(',').map(s => s.trim()) : ['']),
    regulatoryBody: user?.regulatoryBody || '',
    registrationNumber: user?.registrationNumber || '',
    description: user?.description || '',
    slot_duration: user?.slot_duration || 30,
  })

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSpecialtyChange = (index, value) => {
    const newSpecialties = [...formData.specialties]
    newSpecialties[index] = value
    setFormData(prev => ({
      ...prev,
      specialties: newSpecialties
    }))
  }

  const addSpecialty = () => {
    if (formData.specialties.length < 3) {
      setFormData(prev => ({
        ...prev,
        specialties: [...prev.specialties, '']
      }))
    }
  }

  const removeSpecialty = (index) => {
    if (formData.specialties.length > 1) {
      const newSpecialties = formData.specialties.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        specialties: newSpecialties
      }))
    }
  }

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('consultavoce_token')
      if (!token) {
        alert('Sessão expirada. Faça login novamente.')
        navigate('/login')
        return
      }

      const API_URL = import.meta.env.VITE_API_URL || 'https://vitabrasil-backend-production.up.railway.app'
      
      const response = await fetch(`${API_URL}/api/users/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Erro ao atualizar perfil')
      }

      const data = await response.json()
      
      // Update context with data from backend
      updateUser(data.user)
      
      setIsEditing(false)
      alert('Perfil atualizado com sucesso!')
    } catch (error) {
      console.error('Error updating profile:', error)
      alert(`Erro ao atualizar perfil: ${error.message}`)
    }
  }

  const isPatient = user.userType === 'patient'

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Meu Perfil
            </h1>
            <p className="text-xl text-gray-600">
              Gerencie suas informações pessoais
            </p>
          </div>
          <Button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className={isEditing ? 'bg-gradient-to-r from-green-600 to-blue-600' : ''}
          >
            {isEditing ? (
              <>
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </>
            ) : (
              'Editar Perfil'
            )}
          </Button>
        </div>

        {/* Profile Info */}
        <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Nome Completo
                  </label>
                  {isEditing ? (
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className="text-gray-900">{user.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Como quer ser chamado?
                  </label>
                  {isEditing ? (
                    <Input
                      type="text"
                      name="preferred_name"
                      value={formData.preferred_name}
                      onChange={handleInputChange}
                      placeholder="Apelido ou nome preferido"
                    />
                  ) : (
                    <p className="text-gray-900">{user.preferred_name || 'Não informado'}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email
                  </label>
                  {isEditing ? (
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className="text-gray-900">{user.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Telefone
                  </label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                    />
                  ) : (
                    <p className="text-gray-900">{user.phone || 'Não informado'}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    CPF
                  </label>
                  <p className="text-gray-900">{user.cpf || 'Não informado'}</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Endereço</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      CEP
                    </label>
                    {isEditing ? (
                      <Input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleInputChange}
                        placeholder="00000-000"
                      />
                    ) : (
                      <p className="text-gray-900">{user.address?.cep || 'Não informado'}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Rua
                    </label>
                    {isEditing ? (
                      <Input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-900">{user.address?.street || 'Não informado'}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Número
                    </label>
                    {isEditing ? (
                      <Input
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-900">{user.address?.number || 'Não informado'}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Complemento
                    </label>
                    {isEditing ? (
                      <Input
                        type="text"
                        name="complement"
                        value={formData.complement}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-900">{user.address?.complement || 'Não informado'}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Bairro
                    </label>
                    {isEditing ? (
                      <Input
                        type="text"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-900">{user.address?.neighborhood || 'Não informado'}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Cidade
                    </label>
                    {isEditing ? (
                      <Input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-900">{user.address?.city || 'Não informado'}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Estado
                    </label>
                    {isEditing ? (
                      <Input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="RJ"
                      />
                    ) : (
                      <p className="text-gray-900">{user.address?.state || 'Não informado'}</p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        {/* Professional Info */}
        {!isPatient && (
          <>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-green-600" />
                Informações Profissionais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Profissão
                  </label>
                  <p className="text-gray-900">{user.profession}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Registro Profissional
                  </label>
                  <p className="text-gray-900">
                    {user.regulatoryBody} {user.registrationNumber}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Especialidades
                </label>
                {isEditing ? (
                  <div className="space-y-2">
                    {formData.specialties.map((specialty, index) => (
                      <div key={index} className="flex gap-2">
                        <select
                          value={specialty}
                          onChange={(e) => handleSpecialtyChange(index, e.target.value)}
                          className="flex-1 p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Selecione</option>
                          {(specialtiesByProfession[user.profession] || []).map(spec => (
                            <option key={spec} value={spec}>{spec}</option>
                          ))}
                        </select>
                        {formData.specialties.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeSpecialty(index)}
                          >
                            Remover
                          </Button>
                        )}
                      </div>
                    ))}
                    {formData.specialties.length < 3 && (
                      <Button variant="outline" size="sm" onClick={addSpecialty}>
                        Adicionar Especialidade
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {user.specialties?.map((spec, i) => (
                      <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Descrição Profissional
                </label>
                {isEditing ? (
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none"
                    placeholder="Conte sobre sua experiência..."
                  />
                ) : (
                  <p className="text-gray-900">{user.description || 'Não informado'}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Duração dos Horários de Agendamento
                </label>
                {isEditing ? (
                  <select
                    name="slot_duration"
                    value={formData.slot_duration}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="15">15 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="45">45 minutos</option>
                    <option value="60">1 hora</option>
                  </select>
                ) : (
                  <p className="text-gray-900">
                    {user.slot_duration === 15 && '15 minutos'}
                    {user.slot_duration === 30 && '30 minutos'}
                    {user.slot_duration === 45 && '45 minutos'}
                    {user.slot_duration === 60 && '1 hora'}
                    {!user.slot_duration && '30 minutos (padrão)'}
                  </p>
                )}
                {isEditing && (
                  <p className="text-sm text-gray-500 mt-1">
                    Define o intervalo entre cada horário disponível na sua agenda
                  </p>
                )}
              </div>
            </CardContent>
          </Card>


          </>
        )}

        {/* Security */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Segurança</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline">
              Alterar Senha
            </Button>

          </CardContent>
        </Card>

        {isEditing && (
          <div className="mt-6 flex gap-4 justify-end">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar Alterações
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}


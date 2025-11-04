import { Link, useNavigate } from 'react-router-dom'
import { Heart, LogOut, User, Calendar, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Heart className="h-8 w-8 text-green-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">VitaBrasil</span>
          </Link>
          
          <nav className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="font-semibold">
                    <User className="h-4 w-4 mr-2" />
                    Meu Perfil
                  </Button>
                </Link>
                {user.accountType === 'patient' && (
                  <Link to="/search">
                    <Button variant="ghost" size="sm">
                      Buscar Profissionais
                    </Button>
                  </Link>
                )}
                <Link to="/appointments">
                  <Button variant="ghost" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Consultas
                  </Button>
                </Link>
                <Link to="/support">
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Suporte
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Entrar</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Cadastrar
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, User, Lock, X } from 'lucide-react'

const SECURITY_CODE = '111111'

export default function LoginForm() {
  const [userType, setUserType] = useState<'student' | 'staff'>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSecurityCodePopup, setShowSecurityCodePopup] = useState(false)
  const [securityCode, setSecurityCode] = useState(['', '', '', '', '', ''])
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [name, setName] = useState('')
  const router = useRouter()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (error) {
      timer = setTimeout(() => {
        setError('')
        // Reset input fields on error
        setEmail('')
        setPassword('')
        setSecurityCode(['', '', '', '', '', ''])
        setName('')
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [error])

  const handleUserTypeChange = (type: 'student' | 'staff') => {
    setUserType(type)
    setError('')
    setEmail('')
    setPassword('')
  }

  const getUserTypeContent = () => {
    if (userType === 'student') {
      return "Manage your tasks, schedule work hours, and track your progress with AEV SCHEDULER."
    } else {
      return "Assign projects, monitor student progress, and optimize time management with AEV SCHEDULER."
    }
  }

  const validateInput = () => {
    if (userType === 'student' && !email.endsWith('@osu.edu')) {
      setError('Please use your OSU email address')
      return false
    }
    if (!email || !password) {
      setError('Please enter both email and password')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateInput()) return

    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        userType,
      })

      if (result?.error) {
        setError(result.error)
        // Reset input fields on error
        setEmail('')
        setPassword('')
      } else {
        router.push('/dashboard')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      // Reset input fields on error
      setEmail('')
      setPassword('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSecurityCodeChange = (index: number, value: string) => {
    const newCode = [...securityCode]
    newCode[index] = value
    setSecurityCode(newCode)

    if (value && index < 5) {
      const nextInput = document.getElementById(`security-code-${index + 1}`)
      if (nextInput) {
        (nextInput as HTMLInputElement).focus()
      }
    }
  }

  const handleSecurityCodeSubmit = () => {
    const submittedCode = securityCode.join('')
    if (submittedCode === SECURITY_CODE) {
      setShowSecurityCodePopup(false)
      setShowRegistrationForm(true)
    } else {
      setError('Invalid security code')
      setSecurityCode(['', '', '', '', '', '']) // Reset security code fields on error
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
  
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role: 'staff' }),
      })
  
      const data = await response.json()
  
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }
  
      setShowRegistrationForm(false)
      setError('Registration successful. Please log in.')
      // Reset form fields
      setName('')
      setEmail('')
      setPassword('')
    } catch (err) {
      console.error('Registration error:', err)
      setError((err as Error).message || 'An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-4 left-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 shadow-lg z-50 rounded-2xl overflow-hidden">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">AEV SCHEDULER</h1>
          <p className="text-sm">Ohio State University</p>
        </div>
      </header>
  
      {/* Spacer to prevent overlap */}
      <div className="h-40 md:h-40"></div>
  
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8" style={{ height: '500px' }}>
              <h2 className="text-3xl font-bold text-white mb-2">Welcome 👋</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <p className="text-gray-400 my-3">
                This is the official <span className="text-blue-400 font-bold">AEV SCHEDULER</span>
                platform for Ohio State University students and staff. Please sign in to continue.
              </p>
              <div className="flex flex-col gap-4 mt-10">
                <button
                  className={`py-2 rounded-full ${
                    userType === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  onClick={() => handleUserTypeChange('student')}
                >
                  Student
                </button>
                <div className="flex gap-0">
                  <button
                    className={`py-2 flex-grow text-white ${
                      userType === 'staff' ? 'bg-blue-500' : 'bg-gray-700'
                    }`}
                    onClick={() => handleUserTypeChange('staff')}
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 20px) 100%, 0 100%)',
                      borderTopLeftRadius: '9999px',
                      borderBottomLeftRadius: '9999px',
                    }}
                  >
                    Staff
                  </button>
                  <button
                    onClick={() => setShowSecurityCodePopup(true)}
                    className="py-2 flex-grow bg-white text-gray-700 hover:bg-gray-200 transition duration-300"
                    style={{
                      clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 20px 0px)',
                      borderTopRightRadius: '9999px',
                      borderBottomRightRadius: '9999px',
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-b-3xl md:rounded-b-none md:rounded-r-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">{userType === 'student' ? 'Student Access' : 'Staff Portal'}</h2>
                <div className="border-2 w-10 border-white inline-block mb-2"></div>
                <p className="mb-8">{getUserTypeContent()}</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
                    <input
                      type="email"
                      placeholder={userType === 'student' ? 'username@osu.edu' : 'Email'}
                      className="w-full border border-white bg-white bg-opacity-20 p-2 pl-10 rounded-full placeholder-gray-300 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border border-white bg-white bg-opacity-20 p-2 pl-10 rounded-full placeholder-gray-300 text-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center border border-white bg-white text-blue-500 rounded-full py-2 hover:bg-blue-500 hover:text-white transition duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : (
                      <>
                        Sign In <ChevronRight className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Security Code Popup */}
      {showSecurityCodePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-white">Enter Security Code</h3>
            <div className="flex justify-between mb-6">
              {securityCode.map((digit, index) => (
                <input
                  key={index}
                  id={`security-code-${index}`}
                  type="password" // Changes input type to password to show dots instead of characters
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleSecurityCodeChange(index, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSecurityCodeSubmit();
                    }
                  }}
                  className="w-12 h-12 text-center text-2xl border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:border-blue-500 focus:outline-none"
                  autoFocus={index === 0} // Auto-focus on the first input
                />
              ))}
            </div>
            <button
              onClick={handleSecurityCodeSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Verify
            </button>
            <button
              onClick={() => {
                setShowSecurityCodePopup(false);
                setSecurityCode(['', '', '', '', '', '']); // Clear inputs when popup is closed
              }}
              className="mt-4 text-gray-400 hover:text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
  
      {/* Registration Form */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Staff Registration</h3>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm py-2 px-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm py-2 px-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm py-2 px-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </form>
            <button
              onClick={() => setShowRegistrationForm(false)}
              className="mt-4 text-gray-400 hover:text-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
  
      {/* Error Pop-up */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-28 right-6 bg-gradient-to-r from-purple-600 to-red-600 text-white px-8 py-6 rounded-lg shadow-lg z-50"
            style={{
              minWidth: '350px',
              maxWidth: '450px',
              borderLeft: '6px solid #FF6347',  // Adding a thick border to the left for emphasis
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <span className="font-bold text-l">{error}</span>
              </div>
              <button
                onClick={() => setError('')}
                className="ml-4 text-white hover:text-gray-300 transition duration-200"
              >
                <X size={24} />
              </button>
            </div>
        </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}

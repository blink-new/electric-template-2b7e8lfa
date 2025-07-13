<original_content>
<original_content>
<original_content>
<original_content>
<original_content>
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { 
  Zap, 
  Settings, 
  Wrench, 
  Phone, 
  MapPin, 
  Mail, 
  Clock,
  CheckCircle,
  Star,
  Menu,
  X,
  MessageCircle
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Phone number for contact
  const phoneNumber = "0919.080.774"

  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Function to handle Zalo contact - detects platform and either scrolls to contact or opens Zalo app
  const handleZaloContact = () => {
    // First scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }

    // Then handle Zalo functionality
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      // On mobile devices, try to open Zalo app after a short delay to allow scroll
      setTimeout(() => {
        // Try to open Zalo app with phone number
        const zaloUrl = `https://zalo.me/${phoneNumber.replace(/\./g, '')}`
        window.open(zaloUrl, '_blank')
      }, 500)
    } else {
      // On web platforms, show Zalo contact info after scroll
      setTimeout(() => {
        alert(`Liên hệ Zalo: ${phoneNumber}\nTrên điện thoại, bạn có thể mở ứng dụng Zalo để liên hệ trực tiếp.`)
      }, 500)
    }
  }

  // Function to handle phone contact - detects platform and either shows number or initiates call
  const handlePhoneContact = () => {
    // First scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }

    // Then handle phone call functionality
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      // On mobile devices, initiate phone call after a short delay to allow scroll
      setTimeout(() => {
        window.location.href = `tel:${phoneNumber}`
      }, 500)
    } else {
      // On web platforms, show phone number in alert or copy to clipboard
      setTimeout(() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(phoneNumber).then(() => {
            alert(`Số điện thoại đã được sao chép: ${phoneNumber}`)
          }).catch(() => {
            alert(`Số điện thoại liên hệ: ${phoneNumber}`)
          })
        } else {
          alert(`Số điện thoại liên hệ: ${phoneNumber}`)
        }
      }, 500)
    }
  }

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tư vấn thiết kế",
      description: "Thiết kế hệ thống điện công nghiệp, tự động hóa và điều khiển",
      features: ["Thiết kế sơ đồ điện", "Tính toán tải điện", "Lựa chọn thiết bị"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Lắp đặt hệ thống điện",
      description: "Lắp đặt và đấu nối hệ thống điện công nghiệp chuyên nghiệp",
      features: ["Lắp đặt tủ điện", "Đấu nối thiết bị", "Kiểm tra an toàn"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Bảo dưỡng sửa chữa",
      description: "Bảo dưỡng định kỳ và sửa chữa hệ thống điện công nghiệp",
      features: ["Bảo dưỡng định kỳ", "Sửa chữa khẩn cấp", "Thay thế linh kiện"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Quản sửa chữa motor/dinamo",
      description: "Chuyên sửa chữa và bảo dưỡng motor, dinamo các loại",
      features: ["Sửa chữa motor", "Quấn lại dây", "Kiểm tra hiệu suất"]
    }
  ]

  const features = [
    "Đội ngũ kỹ thuật viên giàu kinh nghiệm",
    "Thiết bị hiện đại, công nghệ tiên tiến",
    "Dịch vụ 24/7, hỗ trợ khẩn cấp",
    "Giá cả cạnh tranh, minh bạch",
    "Bảo hành dài hạn cho mọi dự án"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PTV</h1>
                <p className="text-xs text-gray-600">Điện Công Nghiệp - Điện Tự Động</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Trang Chủ</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Dịch Vụ</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Giới Thiệu</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Liên Hệ</a>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                onClick={handlePhoneContact}
              >
                <Phone className="h-4 w-4 mr-2" />
                Gọi Ngay
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                onClick={handleZaloContact}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Liên Hệ Zalo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2">Trang Chủ</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">Dịch Vụ</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">Giới Thiệu</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">Liên Hệ</a>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full mt-4"
                  onClick={handlePhoneContact}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Gọi Ngay
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full mt-4"
                  onClick={handleZaloContact}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Liên Hệ Zalo
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Star className="h-3 w-3 mr-1" />
              Dịch vụ điện hàng đầu Việt Nam
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                PTV - Điện Công Nghiệp
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Chuyên cung cấp dịch vụ điện công nghiệp, điện tự động và bảo dưỡng hệ thống điện chuyên nghiệp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3"
                onClick={handlePhoneContact}
              >
                <Phone className="h-5 w-5 mr-2" />
                Liên Hệ Ngay
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 text-lg px-8 py-3"
                onClick={scrollToServices}
              >
                Xem Dịch Vụ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dịch Vụ Chuyên Nghiệp
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp đầy đủ các dịch vụ điện công nghiệp với chất lượng cao nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Về PTV - Điện Công Nghiệp
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Với nhiều năm kinh nghiệm trong lĩnh vực điện công nghiệp và điện tự động, PTV 
                tự hào là đơn vị hàng đầu cung cấp các giải pháp điện toàn diện cho các doanh nghiệp 
                và nhà máy sản xuất tại khu vực Đồng bằng sông Cửu Long.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Chúng tôi cam kết mang đến dịch vụ chất lượng cao với đội ngũ kỹ thuật viên 
                chuyên nghiệp dưới sự dẫn dắt của Kỹ sư Phạm Thanh Vũ và thiết bị hiện đại nhất.
              </p>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông Tin Công Ty</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Địa chỉ</h4>
                    <p className="text-gray-600">68/3 Khu Vực 4 - Phường Trà Nóc - Quận Bình Thuỷ - TP.Cần Thơ - Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Điện thoại</h4>
                    <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" onClick={handlePhoneContact}>0919.080.774</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zalo</h4>
                    <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" onClick={handleZaloContact}>0919.080.774</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Settings className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kỹ sư phụ trách</h4>
                    <p className="text-gray-600">Phạm Thanh Vũ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Giờ làm việc</h4>
                    <p className="text-gray-600">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Sẵn sàng hỗ trợ bạn 24/7 với dịch vụ điện chuyên nghiệp
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-100 hover:border-blue-200 transition-colors cursor-pointer" onClick={handlePhoneContact}>
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Gọi Điện</h3>
                <p className="text-gray-600 hover:text-blue-600 transition-colors">0919.080.774</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-200 transition-colors cursor-pointer" onClick={handleZaloContact}>
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg w-fit mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Liên Hệ Zalo</h3>
                <p className="text-gray-600 hover:text-blue-600 transition-colors">0919.080.774</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Địa Chỉ</h3>
                <p className="text-gray-600">68/3 Khu Vực 4 - P.Trà Nóc - Q.Bình Thuỷ - TP.Cần Thơ</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg px-12 py-4"
            onClick={handlePhoneContact}
          >
            <Phone className="h-5 w-5 mr-2" />
            Gọi Ngay Để Tư Vấn Miễn Phí
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">PTV - Điện Công Nghiệp</h3>
                  <p className="text-gray-400 text-sm">Điện Công Nghiệp - Điện Tự Động</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Chuyên cung cấp dịch vụ điện công nghiệp, điện tự động và bảo dưỡng 
                hệ thống điện với chất lượng cao nhất tại khu vực Đồng bằng sông Cửu Long.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Dịch Vụ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tư vấn thiết kế</li>
                <li>Lắp đặt hệ thống điện</li>
                <li>Bảo dưỡng sửa chữa</li>
                <li>Sửa chữa motor/dinamo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Liên Hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-blue-400 transition-colors cursor-pointer" onClick={handlePhoneContact}>0919.080.774</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer" onClick={handleZaloContact}>Zalo: 0919.080.774</li>
                <li>Kỹ sư: Phạm Thanh Vũ</li>
                <li>68/3 Khu Vực 4 - P.Trà Nóc</li>
                <li>Q.Bình Thuỷ - TP.Cần Thơ</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PTV - Điện Công Nghiệp. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
</original_content>
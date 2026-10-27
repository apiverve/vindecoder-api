Pod::Spec.new do |s|
  s.name             = 'APIVerveVINDecoder'
  s.version          = '1.2.3'
  s.summary          = 'VIN Decoder turns a 17-character Vehicle Identification Number into the vehicle it identifies.'
  s.description      = <<-'DESC'
VIN Decoder turns a 17-character Vehicle Identification Number into the vehicle it identifies. Returns make, model, year, trim, body class and manufacturer, plus engine specifications, plant of manufacture, and the safety equipment fitted to that specific build. Optionally adds every safety recall issued for that vehicle and its NHTSA 5-star crash-test rating.

This iOS/macOS SDK provides a convenient way to access the VIN Decoder from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/vindecoder?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/vindecoder-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveVINDecoder/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end

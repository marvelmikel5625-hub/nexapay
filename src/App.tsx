<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    {
      icon: <Send className="w-6 h-6" />,
      title: 'Send Money',
      description: 'Transfer money instantly to anyone, anywhere in Nigeria.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Pay Bills',
      description: 'Pay electricity, TV, and other bills in seconds.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Airtime & Data',
      description: 'Buy airtime and data bundles for all networks instantly.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Safe',
      description: 'Your money is protected with bank-grade security.',
      color: 'from-emerald-500 to-emerald-600'
    }
  ].map((feature, index) => (
    <div key={index} className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-50">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-[#0F172A]">{feature.title}</h3>
      <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
    </div>
  ))}
</div>

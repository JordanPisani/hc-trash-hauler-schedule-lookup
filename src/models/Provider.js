export default class Provider {
  constructor (feature, attr) {
    let provider = this.constructor.index.find(x => x.id == feature.attributes[attr])

    this.id = provider.id || null
    this.name = provider.name || null
    this.address = provider.address || null
    this.phone = provider.phone || null
    this.fax = provider.fax || null
    this.email = provider.email || null
    this.website = provider.website || null
  }

  get phoneFormatted () {
    return this.formatPhone(this.phone)
  }

  get faxFormatted () {
    return this.formatPhone(this.fax)
  }
  
  formatPhone (n) {
    return `(${n.substring(0, 3)}) ${n.substring(3, 6)}-${n.substring(6, 10)}`
  }

  static get index () {
    return [
      {
        id: 1,
        name: 'Republic Services',
        address: '5210 W Linebaugh Ave, Tampa, FL 33624',
        phone: '8132650292',
        fax: '8139613534',
        email: 'republicservicesCSR@repsrv.com',
        website: 'http://republicservices.com'
      },
      {
        id: 3,
        name: 'Republic Services',
        address: '5210 W Linebaugh Ave, Tampa, FL 33624',
        phone: '8132650292',
        fax: '8139613534',
        email: 'republicservicesCSR@repsrv.com',
        website: 'http://republicservices.com'
      },
      {
        id: 2,
        name: 'Waste Connections, Inc.',
        address: '5135 Madison Ave, Tampa, FL 33619',
        phone: '8132483802',
        fax: '8132483606',
        email: 'cs-tampa@progressivewaste.com',
        website: 'http://progressivewaste.com'
      },
      {
        id: 5,
        name: 'Waste Connections, Inc.',
        address: '5135 Madison Ave, Tampa, FL 33619',
        phone: '8132483802',
        fax: '8132483606',
        email: 'cs-tampa@progressivewaste.com',
        website: 'http://progressivewaste.com'
      },
      {
        id: 4,
        name: 'Waste Management of Tampa',
        address: '3411 N 40th St, Tampa, FL 33605',
        phone: '8136213053',
        fax: '8137408210',
        email: 'CentralFloridaService@wm.com',
        website: 'http://wm.com'
      },
      {
        id: 'CITY OF TAMPA',
        name: 'City of Tampa',
        address: null,
        phone: '8132748811',
        fax: null,
        email: null,
        website: 'https://www.tampagov.net/solid-waste/programs'
      },
      {
        id: 'CITY OF TEMPLE TERRACE',
        name: 'City of Temple Terrace',
        address: null,
        phone: '8135066570',
        fax: null,
        email: 'pwcustservice@templeterrace.com',
        website: 'http://templeterrace.com/188/Sanitation/'
      },
      {
        id: 'CITY OF PLANT CITY',
        name: 'City of Plant City',
        address: '1802 Spooner Drive, Plant City, FL 33563',
        phone: '8137579208',
        fax: '8137579049',
        email: 'jsessions@plantcitygov.com',
        website: 'https://www.plantcitygov.com/64/Solid-Waste'
      }
    ]
  }
}

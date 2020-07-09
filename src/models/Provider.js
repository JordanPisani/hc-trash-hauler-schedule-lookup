export default class Provider {
  static get index() {
    return [
      {
        ids: ['1', '3'],
        name: 'Republic Services',
        address: '5210 W Linebaugh Ave, Tampa, FL 33624',
        phone: '8132650292',
        fax: '8139613534',
        email: 'republicservicesCSR@repsrv.com',
        website: 'http://republicservices.com'
      },
      {
        ids: ['2', '5'],
        name: 'Waste Connections, Inc.',
        address: '5135 Madison Ave, Tampa, FL 33619',
        phone: '8132483802',
        fax: '8132483606',
        email: 'cs-tampa@progressivewaste.com',
        website: 'http://progressivewaste.com'
      },
      {
        ids: ['4'],
        name: 'Waste Management of Tampa',
        address: '3411 N 40th St, Tampa, FL 33605',
        phone: '8136213053',
        fax: '8137408210',
        email: 'CentralFloridaService@wm.com',
        website: 'http://wm.com'
      },
      {
        ids: ['CITY OF TAMPA'],
        name: 'City of Tampa',
        address: null,
        phone: '8133481111',
        fax: null,
        email: null,
        website: 'https://www.tampagov.net/solid-waste/programs'
      },
      {
        ids: ['CITY OF TEMPLE TERRACE'],
        name: 'City of Temple Terrace',
        address: null,
        phone: '8135066570',
        fax: null,
        email: 'pwcustservice@templeterrace.com',
        website: 'http://templeterrace.com/188/Sanitation/'
      },
      {
        ids: ['CITY OF PLANT CITY'],
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

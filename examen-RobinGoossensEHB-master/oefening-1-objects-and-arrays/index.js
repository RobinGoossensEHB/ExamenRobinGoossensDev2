class Phone {
    constructor(data) {
      this.data = data;
    }
    get htmlString() {
      return `
        <article>
          <div class="image_wrapper">
            <img src="${this.data.image}" alt="${this.data.name} - ${this.data.brand}">
          </div>
          <div class="article_content_wrapper">
            <div>
              <h3>${this.data.name}</h3>
              <h4>${this.data.brand}</h4>
            </div>
            <div class="price">${this.data.price}</div>
          </div>
        </article>
      `
    }
  }
  
class Phones {
  constructor() {
    this.data = [
      {
        name: 'IPHONE 11',
        brand: 'Apple',
        price: 809,
        image: 'https://cdn.mos.cms.futurecdn.net/rJFKqhNF7ZEdPBDg6LdQ4K-768-80.png.webp'
      },
      {
        name: 'ONEPLUS 8 PRO',
        brand: 'Oneplus',
        price: 899,
        image: 'https://cdn.mos.cms.futurecdn.net/GshBbgyzfXcuyzB2ySDV7W-768-80.jpg.webp'
      },
      {
        name: 'IPHONE SE (2020)',
        brand: 'Apple',
        price: 499,
        image: 'https://cdn.mos.cms.futurecdn.net/Pv5UY9QGTWkr2CPA6vkN9i-768-80.png.webp'
      },
      {
        name: 'SAMSUNG GALAXY S20 ULTRA',
        brand: 'Samsung',
        price: 959,
        image: 'https://cdn.mos.cms.futurecdn.net/zPSGkRzoJBtu4NEEaDQCch-768-80.jpg.webp'
      },
      {
        name: 'SAMSUNG GALAXY NOTE 10',
        brand: 'Samsung',
        price: 622,
        image: 'https://cdn.mos.cms.futurecdn.net/ztJWkHq52UfKqgn8eVgZQZ-768-80.jpg.webp'
      },
      {
        name: 'IPHONE 11 PRO',
        brand: 'Apple',
        price: 1000,
        image: 'https://cdn.mos.cms.futurecdn.net/no6isXQdp64V3bieFpsLeh-768-80.png.webp'
      },
      {
        name: 'GOOGLE PIXEL 4',
        brand: 'Google',
        price: 555,
        image: 'https://cdn.mos.cms.futurecdn.net/Wv2kBhTCXStaAFRESERP3P-768-80.jpg.webp'
      },
      {
        name: 'SAMSUNG GALAXY S10 PLUS',
        brand: 'Samsung',
        price: 629,
        image: 'https://cdn.mos.cms.futurecdn.net/Vxj8VvpPJrRHSXLV86Dvfb-768-80.jpg.webp'
      },
      {
        name: 'SONY XPERIA 1',
        brand: 'Sony',
        price: 949,
        image: 'https://cdn.mos.cms.futurecdn.net/thBhakZeuB9GhTN2oENBYU-768-80.jpg.webp'
      },
      {
        name: 'GOOGLE PIXEL 3A',
        brand: 'Google',
        price: 314,
        image: 'https://cdn.mos.cms.futurecdn.net/3xXeBSvWNmAJdYZtfpzeuF-768-80.jpg.webp'
      },
    ];
    this.renderInThisElement = document.getElementById('content_section');
    this.render();
  }

  render() {
  //phonestore.getBrand();
    let htmlString = '';
    this.data.forEach((singlePhoneData) => {
      const phoneInstance = new Phone(singlePhoneData);
      htmlString += phoneInstance.htmlString;
    })
    this.renderInThisElement.innerHTML = htmlString;
  }
}

const phonestore = {
  Phones,
  userinput: {
    selectedBrand:'all',
  },
  applyAll() {
    this.Phones = Phones;
    this.getBrand();
  },
  getBrand() {
    this.Phones = this.Phones.filter((brand) => (
      this.userInput.selectedBrand === 'all' || Phone.brand === this.userInput.selectedBrand
      
      ));
      console.log(brand);
  },
};


// phonestore.applyAll();

const phoneInstance = new Phones();

class RadioInputs {
  constructor(brand) {
    this.brand = brand;
    this.htmlElements = document.getElementsByName(brand);
    this.bindEvents();
  }
  valueChange(event) {
    phoneInstance[this.brand] = event.target.value;
    phoneInstance.render();
  }
  bindEvents() {
    this.htmlElements.forEach((htmlElement) => {
      htmlElement.addEventListener('change', this.valueChange.bind(this));
    })
  }

}

;new RadioInputs('brand');
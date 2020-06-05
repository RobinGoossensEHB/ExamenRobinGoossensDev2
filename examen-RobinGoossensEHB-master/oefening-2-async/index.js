// https://restcountries.eu/rest/v2/all
// "use strict";
// async function loadAsync() {
//   const flagResponse = await fetch('https://restcountries.eu/rest/v2/all');
//   const flagJSON = await flagResponse.json();
//   const flagList = flagJSON.map(({ symbol, name }) => `<li>${symbol} ${name}</li>`).join("");
//   document.getElementById("list").innerHTML = flagList;
//   flagList.forEach(flag)
// }

// loadAsync();

class Flag {
    constructor(data) {
      this.data = data;
    }
    get htmlString() {
      return `
      <main id="results">
      <article>
        <label>
          <h3>${this.data.name}</h3>
          <div class="flagWrapper">
            <img src=${this.data.flag}" />
          </div>
          <input type="checkbox"/>
          Already visited
        </label>
      </article>
      `
    }
}
  
  class Flags {
    constructor(name) {
this.name = name
      this.getData();
    }
    renderResults(content) {
      this.renderInThisElement.innerHTML = content;
    }
    async getData() {
      this.renderResults('loading...');
      const response = await fetch(`https://restcountries.eu/rest/v2/all`);
      this.data = await response.json();
      this.render();
    }
    render() {
        let htmlString = '';
        const flagList = this.data.map(flagData => {
          const flag = new Flag(flagData);
          htmlString += flag.htmlString;
          return flag;
        });
        this.renderResults(htmlString);
        flagList.forEach(flag => {
          flag.bindEvents();
        })
      }
    }
  }
  
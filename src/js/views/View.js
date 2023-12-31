import icons from "../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
            <svg>
            <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
    `;

    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
    `;

    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSuccess(message = this._message) {
    const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
    `;

    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clearHTML() {
    this._parentElement.innerHTML = "";
  }
}

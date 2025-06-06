class VariantSwitcher {
  static #variants = ['polaroid', 'bubble', 'no-photo'];
  #currentVariantIndex = 0;
  #styleEl;

  constructor() {
    document
        .querySelector('body')
        .addEventListener('click', e => this.#cycleVariant());

    this.#styleEl = document.createElement('link');
    this.#styleEl.rel = 'stylesheet';
    document.querySelector('head').appendChild(this.#styleEl);

    this.#applyCurrentVariant();
  }

  #applyCurrentVariant() {
    const variant = VariantSwitcher.#variants[this.#currentVariantIndex];
    this.#applyVariantBodyClass(variant);
    this.#applyVariantStyle(variant);
  }

  #applyVariantBodyClass(variant) {
    for (const v of VariantSwitcher.#variants) {
      if (v !== variant) {
        document.querySelector('body').classList.remove(v);
      }
    }
    document.querySelector('body').classList.add(variant);
  }

  #applyVariantStyle(variant) {
    const variantNormalized = variant.replace(/[^a-zA-Z_]/g, '_').toLowerCase();
    this.#styleEl.setAttribute('href', `cv_${variantNormalized}.css`);
  }

  #cycleVariant() {
    const numVars = VariantSwitcher.#variants.length;
    this.#currentVariantIndex = (this.#currentVariantIndex + 1) % numVars;
    this.#applyCurrentVariant();
  }
}

new VariantSwitcher();

const Form = () => {
  return (
    <div className="row row__flex">
      <form action="#" className="form">
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Nome Completo"
          />
          <label className="form__label">Nome Completo</label>
        </div>
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            id="email"
            placeholder="Numero Telefonico"
          />
          <label className="form__label">Numero Telefonico</label>
        </div>
        <p className="heading-tertiary u-align-start u-margin-bottom-medium">
          Come ci hai conosciuto?{" "}
        </p>
        <div className="form__group">
          <div className="u-margin-bottom-medium form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              name="size"
              id="small"
              required
            />
            <label className="form__radio-label">
              <span className="form__radio-button"></span>
              Tik Tok
            </label>
          </div>
          <div className="u-margin-bottom-medium form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              name="size"
              id="medium"
              required
            />
            <label className="form__radio-label">
              <span className="form__radio-button"></span>
              Instagram
            </label>
          </div>
          <div className="u-margin-bottom-medium form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              name="size"
              id="large"
              required
            />
            <label className="form__radio-label">
              <span className="form__radio-button"></span>
              Amici/Famiglia
            </label>
          </div>
        </div>
        <div className="form__group">
          <button className="btn btn--yellow">Accedi Ora →</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

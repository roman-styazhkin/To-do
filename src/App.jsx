const App = () => {
  return (
    <div className="App">

      <header className="header">
        <div className="uk-container header__inner">
          <h1 className="header__title">To do list</h1>

          <select className="uk-select">
            <option>light theme</option>
            <option>dark theme</option>
          </select>
        </div>
      </header>

      <section className="form">
        <div className="uk-container">
          <form className="form-item">
            <fieldset className="uk-fieldset">

              <legend className="uk-legend">Task form</legend>

              <div className="uk-margin">
                <input className="uk-input" type="text" placeholder="Task title" />
              </div>

              <div className="uk-margin">
                <textarea className="uk-textarea" rows="5" placeholder="Task description"></textarea>
              </div>

              <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input className="uk-checkbox" type="checkbox" defaultChecked /> Add to favorites</label>
              </div>

            </fieldset>

            <button className="uk-button uk-button-primary" type="submit">add a new task</button>
          </form>
        </div>
      </section>

      <section className="tasks">
        <div className="uk-container wrapper">
          <div className="uk-card uk-card-default uk-width-1-2@m">
            <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                <div className="uk-width-expand">
                  <h3 className="uk-card-title uk-margin-remove-bottom">Header</h3>
                  <span className="uk-heart" uk-icon="star"></span>
                  <p className="uk-text-meta uk-margin-remove-top"><time dateTime="2016-04-01T19:00">April 01, 2016</time></p>
                </div>
              </div>
            </div>
            <div className="uk-card-body">
              <p>One drift least extent. Differed rapturous returned poor extent arose can. Opinion whole fanny colonel dried day talking behind seemed visit miss to. Sixteen gate charmed sent father regret talked stand sportsmen off are esteem roof linen confined. Surprise things ready cheerful improved there me covered screened.</p>
            </div>
            <div className="uk-card-footer">
              <button className="uk-button uk-button-danger">
                Delete task
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
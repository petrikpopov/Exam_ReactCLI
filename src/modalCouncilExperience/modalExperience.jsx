function ModalWindowCouncilExperience({ show, onClose }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="model-header">
            <h1>Поради</h1>
            <button onClick={onClose} className="btn btn-outline-dark close"><i class="bi bi-x-lg"></i></button>
          </div>
         
          <div className="content-council">
            <ul>
                <li>Використовуйте правильну назву посади для вакансії, на яку Ви претендуєте. Наприклад, «Продавець» потрібно замінити на «Менеджер по роботі з клієнтами».</li>
                <li>Якомога більш чітко опишіть свої завдання, обов'язки та будь-які отримані компетенції.</li>
                <li>Уважно подивіться, що шукає компанія. Складіть свій текст з урахуванням потреб компанії і доповніть його власним досвідом.</li>
                <li>Якщо у Вас є досвід роботи, вкажіть тільки ті завдання та обов'язки, які мають відношення до вакансії, на яку Ви хочете подати заявку.</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ModalWindowCouncilExperience;
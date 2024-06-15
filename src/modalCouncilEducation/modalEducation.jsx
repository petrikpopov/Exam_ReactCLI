
function ModalWindowCouncilEducation({ show, onClose }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Поради</h1>
            <button onClick={onClose} className="btn btn-outline-dark close">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="content-council">
            <ul>
              <li>Вказуйте лише ті курси, які Ви дійсно відвідували.</li>
              <li>Не вказуйте початкові або середні школи, якщо вони не є Вашою останньою освітою.</li>
              <li>Якщо Ви не закінчили курс повністю, все одно вкажіть його - це може додати цінності Вашому резюме або, принаймні, пояснити пробіл у Вашому досвіді роботи.</li>
              <li>Додайте опис Вашого курсу, щоб пояснити потенційним роботодавцям, що саме він у себе включав.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default ModalWindowCouncilEducation;
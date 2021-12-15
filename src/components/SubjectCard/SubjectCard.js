import classes from "./SubjectCard.module.scss";

const SubjectCard = ({ cardData, modalHandler, updateModalData }) => {
  return (
    <div
      className={classes.card}
      onClick={e => {
        modalHandler();
        updateModalData(cardData);
      }}
    >
      <h3>{cardData.course_title}</h3>
      <span className={classes.detailsLink}>Details</span>
    </div>
  );
};

export default SubjectCard;

import classes from ".//SubjectCard.module.scss";

const SubjectCard = ({ cardData, modalHandler }) => {
  return (
    <div className={classes.card} onClick={modalHandler}>
      <h3>{cardData.title}</h3>
      <span className={classes.detailsLink}>Details</span>
    </div>
  );
};

export default SubjectCard;

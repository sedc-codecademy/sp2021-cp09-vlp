import classes from "./CarouselList.module.scss";

const CarouselList = ({ list }) => {
  return (
    <div className={classes.listContainer}>
      <h2>{list.list_title}</h2>
      <ul>
        {list.list_data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselList;

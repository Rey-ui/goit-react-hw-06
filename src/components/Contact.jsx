import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import css from "./Contact.module.css";
const Contact = ({ data, onDelete }) => {
  return (
    <>
      <div className={css.contactContent}>
        <div className={css.contactText}>
          <span className={css.contactSvg}>
            <IoPerson
              style={{
                color: "#000000",
              }}
            />
          </span>
          <span className={css.contactData}>{data.name}</span>
        </div>
        <div className={css.contactText}>
          <span className={css.contactSvg}>
            <IoCall
              style={{
                color: "#000000",
              }}
            />
          </span>
          <span className={css.contactData}>{data.number}</span>
        </div>
      </div>

      <button className={css.contactDelete} onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;

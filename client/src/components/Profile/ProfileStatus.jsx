import React, {useState} from "react";
import classes from "./ProfileStatus.module.css";

const ProfileStatus = () => {

    const [editMode, activateEditMode] = useState()
    const [value, setValue] = useState()
      
    return (
      <div className={classes.main}>
        {!editMode && (
          <div>
            <p
              className={classes.status}
              onDoubleClick={() => activateEditMode(true)}
            >
              {" "}
              <img
                className={classes.icon}
                src="https://img.icons8.com/fluency-systems-filled/344/ffffff/edit-property.png"
              />
              {value}
            </p>
          </div>
        )}

        {editMode && (
          <div>
            <input
              className={classes.inputStatus}
              placeholder="Обнови статус..."
              type="text"
              onBlur={() => activateEditMode(false)}
              value={value}
              const
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        )}
      </div>
    );
}

export default ProfileStatus;

  /*   const useStatusField = (initialValue) => {
      const [value, setValue] = useState(initialValue)
      const onChange = e => setValue(e.target.value)
      return { value, onChange }
    }

    const statusField = useStatusField()

    return (
        <div className={classes.main}>
                <div>
                    <input className={classes.status} placeholder="Обнови статус..." type='text' {...statusField} />
                </div>
        </div>
    ) */
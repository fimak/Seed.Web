import React, { FC } from "react";
import styles from "@components/footer/buttonsGroup.module.scss";
import Button from "@components/footer/button";
import { BasicLink } from "@components/header/header";

interface ButtonsGroupProps {
  dealerLoginLink: BasicLink;
  subscribeLink: BasicLink;
}

const ButtonsGroup: FC<ButtonsGroupProps> = ({
  dealerLoginLink,
  subscribeLink,
}) => {
  return (
    <div className={styles.buttons}>
      <Button url={dealerLoginLink.url} label={dealerLoginLink.label} />
      <Button url={subscribeLink.url} label={subscribeLink.label} />
    </div>
  );
};

export default ButtonsGroup;

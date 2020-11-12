import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import s from './NotFoundPage.module.scss';
import TeamRocket from './assets/Team_Rocket_trio.png';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <span className={s.caption}>404</span>
      <div className={s.cover}>
        <img src={TeamRocket} alt="Team Rocket" />
        <p className={s.text}>
          The rocket team <span className={s.black}>has won this time.</span>
        </p>
        <Button
          size="regular"
          width="paddings"
          yellow="yellow"
          onClick={() => {
            navigate(LinkEnum.HOME);
          }}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

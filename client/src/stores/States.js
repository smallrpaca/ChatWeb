import { observable, action } from "mobx";

class States {
  @observable user = {
    id: null,
    nickname: null,
    gender: null,
    wishgender: null,
    img: null
  };
  @observable message = null;
  // openchat 에서 사용
  @observable roomName = null;

  @action
  setRoomName = roomName => {
    this.roomName = roomName;
  };

  @action
  setUser = (id, nickname, gender, wishgender, img) => {
    this.user.id = id;
    this.user.nickname = nickname;
    this.user.gender = gender;
    this.user.wishgender = wishgender;
    this.user.img = img;
  };

  @action
  setMessage = data => {
    this.message = data;
  };

  @action
  set_timer = data => {
    this._timer = data;
  };
}

export default States;

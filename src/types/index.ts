export type User = {
  id: string;
  name: string;
  icon: string;
  address: string;
  phone_number: string;
  email: string;
  birthday: Date;
};

export type Friends = {
  user_id: string;
  friend_id: string;
};
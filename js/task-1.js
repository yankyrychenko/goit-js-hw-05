const Account = function (obj) {
  this.login = obj.login;
  this.email = obj.email;
};

Account.prototype.getInfo = function () {
  console.log(`login : ${this.login}, email: ${this.email}`);
};

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo();

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo();

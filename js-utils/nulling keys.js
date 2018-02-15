for (let key in this.modal ) {
  if (key === 'open') {
	this.modal[key] = false;
  } else {
	this.modal[key] = null;
  }
}

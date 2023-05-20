export function setCustomValidation(elementId, emptyMessage, invalidMessage) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.oninvalid = function (event) {
    event.target.setCustomValidity("");
    if (element.value.length === 0) {
      event.target.setCustomValidity(emptyMessage);
    } else if (!event.target.validity.valid) {
      event.target.setCustomValidity(invalidMessage);
    }
  };

  element.oninput = function (event) {
    event.target.setCustomValidity("");
  };
}

export function setupValidation() {
  setCustomValidation(
    "loginEmailValidation",
    "This field cannot be left blank",
    "Only Noroff emails may be used (e.g. student@stud.noroff.no)"
  );

  setCustomValidation(
    "loginPasswordValidation",
    "This field cannot be left blank",
    "Must contain at least 8 characters. Combinations of uppercase, lowercase letters and numbers allowed"
  );

  setCustomValidation(
    "registerUsername",
    "This field cannot be left blank",
    "Combinations of either uppercase or lowercase letters, numbers or underscore are allowed (e.g. SomeUsername_321). Min 5 characters"
  );

  setCustomValidation(
    "registerEmail",
    "This field cannot be left blank",
    "Only Noroff emails may be used (e.g. student@stud.noroff.no)"
  );

  setCustomValidation(
    "registerPassword",
    "This field cannot be left blank",
    "Must contain at least 8 characters. Combinations of uppercase, lowercase letters and numbers allowed"
  );

  setCustomValidation(
    "registerAvatar",
    "This field cannot be left blank",
    "Needs to be in URL format (e.g. https://example/id/12/345)"
  );
}

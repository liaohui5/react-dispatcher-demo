"use strict";

export const onResolve = function (response) {
  return response.data;
};

export const onReject = function (reason) {
  console.info(reason);
};

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('test');

  if (useCookie('auth').value) {
    console.log('Authenticated!');
  } else {
    console.log('Unauthenticated!');
  }
});

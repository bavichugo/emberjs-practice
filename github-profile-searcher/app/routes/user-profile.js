import Route from '@ember/routing/route';

export default class UserProfileRoute extends Route {
  async model(params) {
    const { user_id } = params;

    const response = await fetch(`https://api.github.com/users/${user_id}`);
    if (!response) {
      console.log('Could not obtain user');
      return;
    }

    const data = await response.json();
    if (!data) {
      console.log('There is no user data');
      return;
    }

    const reposResponse = await fetch(data.repos_url);
    if (!reposResponse) {
      console.log('Could not obtain user repos');
      return;
    }

    const reposData = await reposResponse.json();
    if (!data) {
      console.log('There is no user repo data');
      return;
    }

    const finalData = {
      ...data,
      repoList: reposData,
    }

    console.log(finalData);
    return finalData;
  }
}

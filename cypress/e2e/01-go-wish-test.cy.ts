
import { Actions } from './pages/actions';
import { Assertions } from './pages/assertions';

describe("GoWish Page Navigation and Followers Assertion", () => {

  it("Navigating to GoWish Page and Asserting Followers", () => {
    Actions.setDesktopViewport();
    Actions.visitUrl();
    Actions.clickInspirationButton();
    Actions.clickBrandsDropdown();
    Actions.clickCategoryButton();
    Actions.clickLoadMoreButtonTwice();
    Actions.clickImage();
    Assertions.assertFollowersCount();
  });
});
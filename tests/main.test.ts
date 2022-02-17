import {suite, test} from '@testdeck/mocha';
import * as chai from 'chai';
import {isPage, SimplePage} from "../lib/page";

const assert = chai.assert;

@suite
class CustomPageTests
{
	@test 'isPage'()
	{
		const page = new SimplePage('test', '/path');
		assert.isTrue(isPage(page));
	}
}
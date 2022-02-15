import {suite, test} from '@testdeck/mocha';
import * as chai from 'chai';
import {buildMarkdown} from "markdown-generator";
import {Tip} from "../lib/fragment";
import {SimplePage} from "../lib/page";

const assert = chai.assert;

@suite
class CustomPageTests
{
	@test 'page'()
	{
		const page = new SimplePage('test page', '/path/');
	}
}
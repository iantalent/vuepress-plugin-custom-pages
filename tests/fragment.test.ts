import {suite, test} from '@testdeck/mocha';
import * as chai from 'chai';
import {buildMarkdown} from "markdown-generator";
import {Danger, Details, Tip, Warning} from "../lib/fragment";

const assert = chai.assert;

@suite
class CustomPageTests
{
	@test 'Tip'()
	{
		assert.equal(
			buildMarkdown(
				[new Tip('tip message')]
			),
			'::: tip\r\n\r\ntip message\r\n\r\n:::'
		);
	}
	
	@test 'Warning'()
	{
		assert.equal(
			buildMarkdown(
				[new Warning('warning message')]
			),
			'::: warning\r\n\r\nwarning message\r\n\r\n:::'
		);
	}
	
	@test 'Danger'()
	{
		assert.equal(
			buildMarkdown(
				[new Danger('danger message')]
			),
			'::: danger\r\n\r\ndanger message\r\n\r\n:::'
		);
	}
	
	@test 'Details'()
	{
		assert.equal(
			buildMarkdown(
				[new Details('details message')]
			),
			'::: details\r\n\r\ndetails message\r\n\r\n:::'
		);
	}
}
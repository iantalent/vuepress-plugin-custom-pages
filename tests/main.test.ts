import {suite, test} from '@testdeck/mocha';
import * as chai from 'chai';
import {isPage, SimplePage} from "../lib";
import {Heading, Paragraph, UnorderedList} from "markdown-generator";

const assert = chai.assert;

@suite
class CustomPageTests
{
	@test 'isPage'()
	{
		const page = new SimplePage('a', '/a');
		assert.isTrue(isPage(page));
	}
	
	@test 'page parameters'()
	{
		const page = new SimplePage('name', '/path/', {
			title: 'title',
			metaTitle: 'metaTitle'
		});
		const frontMatter = page.frontmatter();
		assert.equal(page.name(), 'name');
		assert.equal(page.path(), '/path/');
		assert.equal(frontMatter.title, 'title');
		assert.equal(frontMatter.metaTitle, 'metaTitle');
		assert.isUndefined(frontMatter.canonicalUrl);
		assert.isUndefined(frontMatter.description);
	}
	
	@test 'page tree'()
	{
		const page = new SimplePage('heading', '/path/');
		page.add(new Paragraph('paragraph'))
			.add((new UnorderedList()).add('first').add('second'));
		const tree = page.tree();
		
		assert.isArray(tree);
		assert.deepEqual(tree, [
			new Heading('heading', 1),
			new Paragraph('paragraph'),
			(new UnorderedList()).add('first').add('second')
		])
	}
}
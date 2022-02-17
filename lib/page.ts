import {FragmentsContainer, FragmentsList, Heading, isFragmentsContainer} from "markdown-generator";

export interface Page extends FragmentsContainer
{
	name(): string
	
	path(): string
	
	frontmatter(): any
}

export type MetaItem = {
	name: string,
	content: string
}

export type Frontmatter = {
	title?: string,
	lang?: string,
	description?: string,
	layout?: string,
	permalink?: string,
	metaTitle?: string,
	meta?: Array<MetaItem>,
	canonicalUrl?: string
}

export class SimplePage implements Page
{
	private readonly fragments: FragmentsList = [];
	
	constructor(private readonly $name: string, private readonly $path: string, private readonly $frontmatter: Frontmatter = {})
	{
		this.fragments.push(new Heading(this.$name, 1));
	}
	
	tree(): FragmentsList
	{
		return this.fragments;
	}
	
	add(...entries: FragmentsList): this
	{
		if(entries && entries.length)
		{
			for(const entry of entries)
				this.fragments.push(entry);
		}
		return this;
	}
	
	name(): string
	{
		return this.$name;
	}
	
	path(): string
	{
		return this.$path
	}
	
	frontmatter()
	{
		return this.$frontmatter;
	}
}

export function isPage(page: any): page is Page
{
	return typeof page['name'] === 'function' && typeof page['path'] === 'function' &&
		typeof page['frontmatter'] === 'function' && isFragmentsContainer(page);
}
import {FragmentContent, WrappedNewLineFragment} from "markdown-generator";

class ContainerFragment extends WrappedNewLineFragment
{
	constructor(content: FragmentContent, type: string, title: string = '')
	{
		super(content, '::: ' + type + (title ? ' ' + title : ''), ':::');
	}
}

export class Tip extends ContainerFragment
{
	constructor(content: FragmentContent, title: string = '')
	{
		super(content, 'tip', title);
	}
}

export class Warning extends ContainerFragment
{
	constructor(content: FragmentContent, title: string = '')
	{
		super(content, 'warning', title);
	}
}

export class Danger extends ContainerFragment
{
	constructor(content: FragmentContent, title: string = '')
	{
		super(content, 'danger', title);
	}
}

export class Details extends ContainerFragment
{
	constructor(content: FragmentContent, title: string = '')
	{
		super(content, 'details', title);
	}
}
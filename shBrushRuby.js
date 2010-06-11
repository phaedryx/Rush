/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */

// SyntaxHighlighter can be found here: http://alexgorbatchev.com/wiki/SyntaxHighlighter

// Brush written by Tad Thorley (phaedryx)
SyntaxHighlighter.brushes.Ruby = function()
{	
	var keywords =	'alias and BEGIN begin break case class def define_method defined do else elsif ' +
					'END end ensure false for if in module next nil not or raise redo rescue retry return ' +
					'self super then throw true undef unless until when while yield __FILE__ __LINE__';
	
	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comment' },
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		  css: 'string' },
		{ regex: /\%q\(.*\)/g, css: 'string'},
		{ regex: /\%x\(.*\)/g, css: 'string'},
		{ regex: /\`.+\`/g,    css: 'string'},
		{ regex: /\%\(.*\)/g,  css: 'string'},
		{ regex: /\b[A-Z][A-Za-z0-9_]+\b/g,	css: 'constant' },
		{ regex: /:[a-z][A-Za-z0-9_]*/g, css: 'symbol' },
		{ regex: /:\"[A-Za-z0-9_]+\"/g, css: 'symbol'},
		{ regex: /\%s\(.*\)/g, css: 'symbol'},
		{ regex: /(\$|@@|@)\w+/g,	css: 'variable' },	// $global, @instance, and @@class variables
		{ regex: /[\{\}\(\)\[\]]/g, css: 'paren'},
		{ regex: /\/.+\/[imosx]*/g, css: 'regexp'},
		{ regex: /\%r\(.*\)/g, css: 'regexp'},
		{ regex: /\.[A-Za-z][A-Za-z0-9_]+/g, css: 'method'},
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword'}
	];

	this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Ruby.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Ruby.aliases		= ['ruby', 'rails', 'ror', 'rb'];



		var text_info = {

			content : "a man, a plan, a canal panama",
			contents : new Array(7),		
			count_chars : function  ()
			{
				for (var i=0; i<this.content.length; i++)
				{
					var count = 0;
					for (var j=i+1; j<this.content.length; j++)
					{
						if (this.content[i]==this.content[j]) count+=1;
					}
					
					alert(count);
					if ( this.contents.indexOf (this.content[i]) === -1 ) 
					{
						this.contents[this.content[i]] = this.contents[this.content[i]] + count;
					}
				}
			}
		};
	
		print (text_info.content);
		text_info.count_chars();
		for (  c in text_info.contents )
		{
			print('(' + c + ') appeas ' + text_info.contents[c] + 'times')
		}

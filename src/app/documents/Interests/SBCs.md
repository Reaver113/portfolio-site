---
heading: SBCs
---

##### Home Servers and SBCs

&nbsp;
&nbsp;

<div clasName='paragraphWrapper'>
When I set out to build my own <b>home media and Git server</b>, I decided to use a <b>Raspberry Pi</b> and run <b>Plex</b> on <b>Debian Linux</b>. Setting up the media server was fairly straightforward—I installed Plex, connected an <b>external SSD</b> for storage, and configured <b>Samba</b> so I could <b>access my media from other devices</b>. Getting the Git server up and running was a bit trickier. I went with <b>Gitea</b> since it’s lightweight, but I had to spend some time configuring <b>SSH access</b>, setting up <b>static IPs</b>, and making sure my <b>firewall rules</b> were solid. I also learned the hard way that <b>cooling</b> is important. At first, my Pi would <b>slow down under load</b>, but adding a <b>heatsink and fan</b> solved the problem. Overall, the Raspberry Pi worked well, but I started wondering if I could get the same setup running on a cheaper <b>Orange Pi</b>.

<Image className='SBCImage' src='/SBCs.jpg' />

</div>

&nbsp;

<div clasName='paragraphWrapper'>
I was a bit skeptical about the <b>Orange Pi</b> at first since it doesn’t have the same level of support as the <b>Raspberry Pi</b>, but I was pleasantly surprised. While finding the right <b>Debian</b> image took some extra effort, once I got it installed, everything worked surprisingly well. <b>Plex</b> ran just as smoothly as it did on the Raspberry Pi, and setting up <b>Gitea</b> followed the same steps without major issues. I did have to tweak some <b>power settings</b> to keep the board <b>stable under load</b>, but after switching to a <b>higher-quality power adapter</b>, it ran reliably. The biggest challenge was the <b>lack of official documentation</b>, which meant a lot of <b>problem-solving through trial and error</b>, but in the end, the Orange Pi handled both the media server and Git server <b>without any major compromises</b>. Considering the <b>cost savings</b>, I’d say it was definitely <b>worth the extra effort</b>.
</div>

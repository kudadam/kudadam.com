<script type="text/javascript">
import SEO from "svelte-seo";
import Button from "../Components/Button.svelte";
import ProjectCard from "../Components/ProjectCard.svelte";
</script>
<SEO
title = "Kudadam • Home"
description = "Hey, am Lucretius, a software developer and website designer. Welcome to my part of the internet. Feel free to read my blog post, download my softwares or just look around"
keywords = "lucretius, biah, lucretius biah, lucretius website"
canonical = "https://www.kudadam.com"
openGraph={{
title: 'Kudadam • Home',
description: 'Hey, am Lucretius, a software developer and website designer. Welcome to my part of the internet. Feel free to read my blog post, download my softwares or just look around',
url: 'https://www.kudadam.com',
type: 'website',
images: [
{
url: 'https:kudadam.sirv.com/logo/logo.png',
width: 850,
height: 650,
alt: 'Kudadam Logo'
}
]
}}
twitter={{
site: "@lucretius_1",
title: "Kudadam • Home",
description: "Hey, am Lucretius, a software developer and website designer. Welcome to my part of the internet. Feel free to read my blog post, download my softwares or just look around",
image: "https://kudadam.sirv.com/logo/logo.png",
imageAlt: "Logo of Kudadam",
}}
/>
<section>
    <div class="text-center">
        <h1 class="font-bold text-red-500">Hey, am Lucretius</h1>
        <p>Am a web designer and software developer<br>I bring your imaginations into reality with <span>
            <span style="color: green">&lt;</span><span style="color: red">code</span><span style="color: green">/</span><span style="color: green">&gt;</span></span>
        </p>
        <img class="w-80 mx-auto my-3" src="https://kudadam.sirv.com/svg/boy.svg" alt="Cartoonish boy winking his eye" >
        <div class="py-3">
            <p>
                Want me to help you with an interesting project?<br>
                <span class="font-bold block">OR</span>
                Wanna design a website?<br>
                <Button primary><a href="contact">Contact me</a></Button>
            </p>
        </div>
    </div>
</section>
<section>
    <h3 class="text-center font-semibold text-red-500">Area of interest</h3>
    <div class="flex flex-wrap md:flex-row-reverse mb-2">
        <div class="w-full md:w-1/2">
            <img loading="lazy" src="https://kudadam.sirv.com/svg/showing_resume.svg" alt="" style="max-height: 400px;width: 100%" />
        </div>
        <div class="w-full my-2 md:w-1/2 flex items-center justify-center">
            <p>
                My primary area of interest is in back-end development. Passing data through the hands of functions and giving them instructions is very fun for me.<br>
                Nevertheless, am equally good in frontend development too. Being able to turn common words into beautiful designs is a skill one should be proud of.
            </p>
        </div>
    </div>
</section>
<section class="my-4">
    <h3 class="text-center">Languages I <span style='color: green'>&lt;</span><span class="text-danger">speak</span><span style="color: green">/&gt;</span></h3>

    <div class="grid md:grid-cols-10">
        <div class="md:col-span-4">
            <img loading="lazy" src="https://kudadam.sirv.com/svg/chart_1.svg" alt=""/>
        </div>
        <div class="md:col-span-6">
            <div class="grid grid-cols-8">
                <div class="col-span-7 md:col-span-4">
                    <p class="font-bold my-3">Backend languages</p>
                    <ul class="rounded border divide-y divide-gray-300">
                        <li class="flex p-2">
                            <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" class="h-10 w-10 mr-1" alt=""/>
                            Ruby
                        </li>
                        <li class="flex p-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/150px-ISO_C%2B%2B_Logo.svg.png" alt="" class="h-10 w-10 mr-1" />
                        C++</li>
                        <li class="flex p-2">
                            <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" class="h-10 w-10 mr-1" alt=""/>
                        Python</li>
                        <li class="flex p-2">
                            <img src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" alt="MySQL logo" class="h-10 w-10 mr-1">
                        MySQL</li>
                        <li class="flex p-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript logo" class="h-10 w-10 mr-1" />
                        JavaScript</li>
                        <li class="flex p-2"><img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP logo" class="h-10 w-10 mr-1" />PHP</li>
                    </ul>
                </div>
                <div class="col-span-7 md:col-span-4 m-2">
                    <p class="font-bold my-3">Front-end languages</p>
                        <ul class="rounded border divide-y divide-gray-300">
                            <li class="flex p-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Logo of HTML" class="h-10 w-10" />
                            HTML</li>
                            <li class="flex p-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="Logo of CSS3" class="h-10 w-10">
                            CSS</li>
                            <li class="flex p-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="SASS logo" class="h-10 w-10" />
                            SASS</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <h3 class="text-center font-semibold text-red-500">Softwares I made...</h3>
    <p class="text-center">I also design and make softwares too</p>
    <div class="my-5"><img class="  block mx-auto" src="https://kudadam.sirv.com/svg/dev.svg" loading="lazy" style="height: 300px;" alt="developer in front of a computer"/></div>
    <div class="flex flex-wrap">
        <ProjectCard
            image = "https://kudadam.sirv.com/quickbase64/version_3.png?thumbnail=200&q=90"
            title = "Quick Base64"
            description = "A software which allows you to encode and decode your files into base 64 format with ease"
            url = "https://www.kudadam.com/quickbase64"
        />
        <ProjectCard
            image = "https://kudadam.sirv.com/extractfrom/version_5.png?thumbnail=200"
            title = "Extract From"
            description = "A software which helps you to extract a specific file type from one place to another"
            url = "https://www.kudadam.com/extractfrom"
        />
    </section>
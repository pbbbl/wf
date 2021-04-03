# Easy Form Persist (ezFormPersist)
## About
I built this as a quick, simple tool for myself and my Full Time team.
As Webflow designers, we often need a quick way to implement Cookies on a form without extensive knowledge of cookies, or JavaScript.

### Unsupported fields
- Does not support `radio` or `checkbox` inputs
- Does not support `textarea`.


## Installing
Add the following code to the bottom of the "Footer Code" in [Webflow Project] / Settings / Project Settings.
*Another option is to use this on any website.*
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/pbbbl/ezFormPersist/dist/ezFormPersist.js"></script>
```
Below that script tag you must also have ...
```
<script type="text/javascript">
ezFormPersist();
</script>
```

## Use (Webflow)
### Name your field (`name` attribute)
The script will save and autofill all fields with matching names. 
#### Different Forms, Same Name
If you have two forms, both with fields where a user can input their name, and the fields\` `name` attributes match, the data saved by one field will be autofilled in the other.
Similarly, the two fields will overwrite eachother if the user changes the value on one.

### Add the `data-save-field` data-attribute to a suported element
In the right-hand panel, after selecting a supported element (see below), add the following attribute to the element that you want saved, even after the page is reloaded.

### Attribute
```
data-save-field
```
### Value
The `value` represents the number of days the Cookie will last and data will be auto-filled on a form.
- `true`: Uses default expiration: `31` Days
- `1` or greater.

### 

## Use (HTML)
````
<input type="text" data-save-field="true" />
<!-- Any user-input-value will be saved for 31 days -->
````

## Examples 
All examples are in HTML for ease of documentation.
### Same Field, Different Form
```
<!-- FORM #1 -->
<form>

<label>Name #1</label>
<input name="name" type="text"/>

<label>Email #1</label>
<input name="emailAddress" type="text"/>

</form>
```
```
<!-- FORM #2 -->
<form>

<label>Name #2</label>
<input name="name" type="text"/>

<!-- 
Name #2's Name Attribute matches Name #1's in Form #1 
The data will be autofilled and sync between both forms' fields.
-->



<label>Email #2</label>
<input name="email" type="text"/>
<!-- 
Email #2's Name Attribute DOES NOT match Email #1's
The two fields WILL NOT be autofilled, and WILL NOT overwrite eachother.
-->
</form>
```
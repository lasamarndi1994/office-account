<template>
<div class="content container-fluid">
    <div class="row">
        <div class="col-md-8 offset-md-2">

            <div class="page-header">
                <div class="row">
                    <div class="col-sm-12">
                        <h3 class="page-title">Basic Settings</h3>
                    </div>
                </div>
            </div>

            <form>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Default Country</label>
                            <select class="select  form-control"  tabindex="-1" aria-hidden="true">
                                <option>USA</option>
                                <option>United Kingdom</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-g7m3" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-hfe7-container" aria-controls="select2-hfe7-container"><span class="select2-selection__rendered" id="select2-hfe7-container" role="textbox" aria-readonly="true" title="USA">USA</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Date Format</label>
                            <select class="select select2-hidden-accessible form-control" tabindex="-1" aria-hidden="true">
                                <option value="d/m/Y">15/05/2016</option>
                                <option value="d.m.Y">15.05.2016</option>
                                <option value="d-m-Y">15-05-2016</option>
                                <option value="m/d/Y">05/15/2016</option>
                                <option value="Y/m/d">2016/05/15</option>
                                <option value="Y-m-d">2016-05-15</option>
                                <option value="M d Y">May 15 2016</option>
                                <option selected value="d M Y" data-select2-id="select2-data-6-1uni">15 May 2016</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-0e4u" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-2lch-container" aria-controls="select2-2lch-container"><span class="select2-selection__rendered" id="select2-2lch-container" role="textbox" aria-readonly="true" title="15 May 2016">15 May 2016</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Timezone</label>
                            <select class="select select2-hidden-accessible form-control" data-select2-id="select2-data-7-swiy" tabindex="-1" aria-hidden="true">
                                <option data-select2-id="select2-data-9-s1lq">(UTC +5:30) Antarctica/Palmer</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-8-muzm" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-jywb-container" aria-controls="select2-jywb-container"><span class="select2-selection__rendered" id="select2-jywb-container" role="textbox" aria-readonly="true" title="(UTC +5:30) Antarctica/Palmer">(UTC +5:30) Antarctica/Palmer</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Default Language</label>
                            <select class="select select2-hidden-accessible form-control" data-select2-id="select2-data-10-um16" tabindex="-1" aria-hidden="true">
                                <option selected data-select2-id="select2-data-12-9wmv">English</option>
                                <option>French</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-11-xu48" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-z5pm-container" aria-controls="select2-z5pm-container"><span class="select2-selection__rendered" id="select2-z5pm-container" role="textbox" aria-readonly="true" title="English">English</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Currency Code</label>
                            <select class="select select2-hidden-accessible form-control"  tabindex="-1" aria-hidden="true">
                                <option selected data-select2-id="select2-data-15-d4zu">USD</option>
                                <option>Pound</option>
                                <option>EURO</option>
                                <option>Ringgit</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-14-hl0i" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-eacs-container" aria-controls="select2-eacs-container"><span class="select2-selection__rendered" id="select2-eacs-container" role="textbox" aria-readonly="true" title="USD">USD</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Currency Symbol</label>
                            <input class="form-control" readonly value="$" type="text">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
